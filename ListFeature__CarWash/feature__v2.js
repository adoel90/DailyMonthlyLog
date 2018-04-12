#

	Scenario: Cerita-nya SuperAdministrator sedang mau Buat User Baru dan memilih Level Akses ==> DONE

		***BUG_01, ganti "Kasir Member" menjadi "Kasir"

#

	Scenario: Cerita-nya mau Login as SuperAdministrator ==> DONE

		***BUG_01, GANTI userlogin "admin" MENJADI "superadministrator"

#

	Scenario: Cerita-nya SuperAdministrator mau Buat Store Baru dan memiliih Kategori

		***BUG_01, Kategori hanya berisi pilihan : 1. Service & 2. F & B

#

	Scenario: Ceritanya SuperAdministrator mau lihat histori Customer telah membeli apa aja (LAPORAN DI SUPERADMINISTRATOR)

		***FEATURE_01, Tambahin "Laporan History", filter berdasarkan "nama customer" || Laporan History Customer


#

	Scenario: Cerita-nya "Owner" pengen tahu laporan- laporan yang ada di Store milik-nya (LAPORAN BISA DI PRINT MELALUI PC)

		***FEATURE_01, Laporan barang di jual per-tanggal/ transaksi

		***FEATURE_02, Print list menu 

		***FEATURE_03, Laporan total penjualan per-hari dari tanggal sekian ke sekian

			- Jumlah penjualan perhari.


#
	Scenario: Ceritanya "Kasir/Supervisor" pengen tahu laporan - laporan aktifitas yang terjadi di kasir

		***FEATURE_01, Laporan top-up harian

		***FEATURE_02, Laporan closing-an per-shift & per-login

		***FEATURE_03, Print when buat kartu baru 

		***FEATURE_04, Print when top-up

		***FEATURE_05, Print when Refund


# 	
	
	Scenario: Ceritanya "Pengisian data customer tidak harus lengkap"
	
		***BUG_01, Apa-nya yang tidak harus lengkap ?


#	
	Scenario : Ceritanya Customer gesek kartu, kemudian nomor seri kartu itu di 'hide'

		***BUG_01, saat ini nomor kartu seri muncul di kolom input 

#
	Scenario : Cerita-nya ketika print-out apa yang di beli Customer

		***BUG_01, tambahin nama store di print-out





