<!DOCTYPE html>
<html>
<head>
	<title>Laporan Zakat</title>
</head>
<body>
<link rel="stylesheet" type="text/css" href="main.css">
	<button onclick="window.location.href='export_excel.php'" class="button">Export to Excel</button>

	<table>
		<tr>
			<th>No</th>
			<th>Nama</th>
			<th>Tanggungan Zakat</th>
			<th>Zakat</th>
			<th>Sodaqoh</th>
		</tr>
		<?php 
		// koneksi database
		$koneksi = mysqli_connect("localhost","username","pass","dbnamae");

		if ($koneksi->connect_error) {
			die("Connection failed: " . $koneksi->connect_error);
			echo [error_koneksi];
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

		//$koneksi2 = new mysqli_connect("localhost","","","");
		//$data2 = 
		
		mysqli_connect($koneksi2,"select * from Jamaah");

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