# ==> DONE

	Scenario: Cerita-nya SuperAdministrator sedang mau Buat User Baru dan memilih Level Akses 

		***BUG_01, ganti "Kasir Member" menjadi "Kasir"

# ==> DONE

	Scenario: Cerita-nya mau Login as SuperAdministrator 

		***BUG_01, GANTI userlogin "admin" MENJADI "superadministrator"


# FOKUS INI DULU 

	Scenario: Ceritanya "Kasir/Kasir Member" pengen tahu laporan - laporan aktifitas yang terjadi di kasir

		***FEATURE_01, Laporan top-up harian

			- Nama Customer

			- Tanggal Top top-up

			- Nominal Saldo yang di top-up

			- 

		***FEATURE_02a, Laporan Kartu Baru harian

		***FEATURE_02b, Laporan closing-an per-shift & per-login

		***FEATURE_03, Print when buat kartu baru 

		***FEATURE_04, Print when top-up

		***FEATURE_05, Print when Refund


#

	Scenario : Ceritanya Login as Staff "fahmi87654321" dari si owner pengen buat laporan 

		***BUG_01, tampil page Laporan yang isi-nya barang/ transaksi apa aja yang sudah di lakukan di hari itu 

		***BUG_02, ga ada report menu produk yang sudah di jual


	Scenario : Ceritanya Login as SuperAdministrator juga pengen KEPO 
				aktifitas Si Staff & laporan yang di buat dari suatu Store

		***BUG_01, NOT REQUIREMENT


# 

	Scenario: Ceritanya login as SuperAdministrator mau lihat histori dari setiap "Customer" telah membeli apa aja 
				di semua store & transaksi (LAPORAN DI SUPERADMINISTRATOR)

		***FEATURE_01, Tambahin "Laporan History", filter berdasarkan "nama customer" || Laporan History Customer

		***"Pertanyaan-nya itu keseluruhan Customer ?"

#

	Scenario: Cerita-nya SuperAdministrator mau Buat Store Baru dan memiliih Kategori

		***BUG_01, Kategori hanya berisi pilihan : 1. Service & 2. F & B


# 

	Scenario: Cerita-nya "Owner" pengen tahu laporan- laporan yang ada di Store milik-nya (LAPORAN BISA DI PRINT MELALUI PC)

		***FEATURE_01, Laporan barang di jual per-tanggal/ transaksi

			- Apaan aja y ?

		***FEATURE_02, Print list menu 

		***FEATURE_03, Laporan total penjualan per-hari dari tanggal sekian ke sekian

			- Jumlah penjualan perhari.


	Scenario: Cerita-nya login as "SuperAdministrator" pengen KEPO juga 
				dari setiap Laporan yang di miliki Store Owner

		***"Pertanyaan-nya apa aja yang ingin di tampilin di dalam laporan tsb ?" 


# 	
	
	Scenario: Ceritanya "Pengisian data customer tidak harus lengkap"
	
		***BUG_01, Apa-nya yang tidak harus lengkap ?


#

	Scenario : Ceritanya Customer gesek kartu, kemudian nomor seri kartu itu di 'hide'

		***BUG_01, saat ini nomor kartu seri muncul di kolom input 

#
	Scenario : Cerita-nya ketika print-out apa yang di beli Customer

		***BUG_01, tambahin nama store di print-out


