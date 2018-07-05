#Feature Level Akses Superadmin

	- Scenario: Superadmin berhasil buat User Baru dengan mengisi field Nama Lengkap, Alamat Email, Username (nama user untuk login), password, dan memberikan Level Akses terahadap user yang sedang di buat.

	- Scenario: Superadmin dapat melihat list daftar user yang memiliki akses Kasir & Owner

	- Scenario: SuperAdministrator berhasil membuat Store baru dengan memilih siapa Owner-nya, dan dapat memilih tipe Store (Service atau F & B) 

	- Scenario: Superadmin dapat melihat list daftar store yang telah di buat.

	- Scenario: Superadmin dapat melihat list daftar member/ customer yang telah di daftarkan oleh kasir.

	- Scenario: Superadmin berhasil membuat tipe kartu Member (saat ini ada 3 tipe kartu yaitu Member, Non-Member, Taxi Online)

	- Scenario: Superadmin dapat melihat list tipe - tipe kartu yang telah di buat

		Given, superadmin berada di Manajemen Tipe kartu
		When, klik "Daftar Tipe kartu"
		Then, muncul list tipe- tipe kartu yang telah di buat

	- Scenario: Superadmin berhasil membuat tipe akses "Owner" (saat ini ada 4 tipe Akses yaitu : Owner, Staff, Kasir, Superadmin)

	- Scenario: Superadmin dapat melihat list tipe - tipe akses yang telah di buat 

		Given, superadmin berada di Manajemen Tipe Akses
		When, klik "Daftar Tipe Kartu"
		Then, muncul list tipe- tipe akses yang telah di buat 

	- Scenario: Superadmin berhasil membuat produk baru di "Doel Cell" Store

	- Scenario: Superadmin berhasil melihat list daftar produk- produk "Doel Cell" yang telah di buat

	- Scenario: Superadmin berhasil membuat akun staff baru untuk "Doel Cell" Store

	- Scenario: Superadmin dapat melihat staff - staff yang ada di "Doel Cell" Store

	- Scenario: Superadmin dapat melihat Total Laba Kotor "Doel Cell" dari tanggal 1 Mei 2018 sampai 03 Juli 2018

		(Next, feature pencarian berdasarkan nama toko mesti di tambahkan ini )

		Given, superadmin berada di Laporan Total Penjualan
		And, setting tanggal dari tanggal 1 Mei 2018 sampai 03 Juli 2018
		When, klik Laporan Total Penjualan
		And, lakukan pencarian dengan mengetik "Doel Cell" 
		Then, muncul nama store "Doel Cell"

	- Scenario: Superadmin dapat melihat detail penjualan produk apa saja yang terjual di "Doel Cell" dari tanggal 1 Mei 2018 sampai 03 Juli 2018

	- Scenario: Superadmin dapat melihat detail penjualan produk apa saja yang terjual di "Doel Cell" per- hari.

	- Scenario: Superadmin dapat melihat aktifitas transaksi Kasir sesuai tanggal per-hari

	- Scenario: Superadmin dapat melihat list member berikut aktifitas transakasi pembayaran yang di lakukan member/ customer tersebut, melihat saldo, seri nomor kartu.


#Feature Level Akses Kasir

	- Scenario: Kasir berhasil mengisi ulang/ top-up kartu customer sebesar Rp.500.000

	- Scenario: Kasir berhasil generate membuat kartu baru member

	- Scenario: Kasir berhasil merefund uang dari Customer tipe Non-Member yang mengembalikan kartu.

	- Scenario: Kasir dapat melihat aktifitas transaksi sesuai tanggal per-hari

	- Scenario: Kasir berhasil melakukan check saldo dari customer yang ingin mengetahui sisa saldo terakhir mereka.


#Feature Level Akses Owner

	- Scenario: Doel sebagai owner berhasil membuat produk baru yaitu "Operator Vodafone" di dalam Store "Adoel Cell"

	- Scenario: Owner dapat melihat list daftar produk yang telah di buat.

	- Scenario: Owner berhasil buat User Baru dengan mengisi field dengan Lengkap

	- Scenario: Owner dapat melihat list daftar staff sesuai dengan nama store yang di pilih

	- Scenario: Owner juga bisa melakukan transaksi 


#Feature Level Akses Staff

	- Scenario: Faisal as staff Adoel Cell berhasil melakukan transaksi

	- Scenario: Faisal dapat melihat aktifitas penjualan sesuai tanggal per-hari


#Feature Level Akses Member

	- Scenario: Santi as Customer dengan tipe kartu Meember berhasil membayar service Poles Body "Salon Mobil" seharga 56.000

	




