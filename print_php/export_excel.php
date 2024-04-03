<!DOCTYPE html>
<html>
<head>
	<title>Laporan Zakat</title>
</head>
<body>
	<link rel="stylesheet" type="text/css" href="/main.css">
	<style type="text/css">
	body{
		font-family: sans-serif;
	}
	table{
		margin: 20px auto;
		border-collapse: collapse;
	}
	table th,
	table td{
		border: 1px solid #3c3c3c;
		padding: 3px 8px;

	}
	a{
		background: blue;
		color: #fff;
		padding: 8px 10px;
		text-decoration: none;
		border-radius: 2px;
	}
	</style>

    <?php
	header("Content-type: application/vnd-ms-excel");
	header("Content-Disposition: attachment; filename=Zakat.xls");
	?>

	<center>
		<a target="_blank" href="export_excel.php">EXPORT KE EXCEL</a>
	</center>

	<table>
		<tr>
			<th>No</th>
			<th>Nama</th>
			<th>Tanggunan Zakat</th>
			<th>Zakat</th>
			<th>Sodaqoh</th>
		</tr>
		<?php 
		// koneksi database
		$koneksi = mysqli_connect("localhost","root","","app_masjid");

		if ($koneksi->connect_error) {
			die("Connection failed: " . $koneksi->connect_error);
			echo [jancuk];
		}

		// menampilkan data pegawai
		$data = mysqli_query($koneksi,"
								select 
									Family.nama_kepala_keluarga as nama,
									Sodakoh.jumlah_sodakoh as sodaqoh,
									Zakat.jumlah_zakat as zakat,
									group_concat(Jamaah.nama) as Jn
									
								from Family
								join Zakat 
								on 
									Family.uuid=Zakat.uuid_family 

								join Sodakoh 
								on 
									Sodakoh.uuid_family=Family.uuid	
								
								join Jamaah
								on 
									Jamaah.uuid_family=Family.uuid	
							

								where Jamaah.jabatan_di_keluarga!='kepala_keluarga'

								group by Jamaah.uuid_family
	
								order by 
									Jamaah.id
								");

		//$koneksi2 = new mysqli_connect("localhost","root","","app_masjid");
		//$data2 = mysqli_connect($koneksi2,"select * from Jamaah");

		$no = 1;
		while($d = mysqli_fetch_array($data)){
		?>
		<tr>
			<td><?php echo $no++; ?></td>
			<td><?php echo $d['nama']; ?></td>
			<td>
				<ul>
				<?php 
				foreach(explode(',',$d['Jn'])as $Jn)
				echo '<li>'. $Jn .'<br></li>'; 
				?>
				</ul>
			</td>
			<td align="right"><?php echo number_format($d['zakat']); ?></td>
			<td align="right"><?php echo number_format($d['sodaqoh']); ?></td>
		</tr>
		<?php 
		}
		mysqli_free_result($data);

		$data->close();
		?>
	</table>
</body>
</html>