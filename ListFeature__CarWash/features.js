
# **********************************************CAMPURAN******************************************************


#

	Feature Vendor --> DONE

	Scenario: Tampil layout Vendor seperti layout user 

		Given, url in root '/vendor'

		When, akses '/vendor'

		Then, layout 


	Scenario: Tampil list of Vendor User


	- ###PERUBAHAN PATH URL FEATURE Vendor###

	Feature Vendor -->  DONE

	Scenario: Tampil layout Vendor satu page dengan layout user di path 'http://localhost:3000/admin/vendor'

		Given, url in root 'http://localhost:3000/admin/vendor'

		When, klik link 'Daftar Vendor'

		Then, muncul layout vendor


#
	Feature Vendor --> DONE

	Scenario: ("POSITIF") Tampil page Vendor Login di url 'http://localhost:3000/vendor/login' karena belum ada accessToken sebelum-nya

		Given, inside url in http://localhost:3000/vendor

		When, akses http://localhost:3000/vendor

		And, tidak ada akses token 

		Then, page login muncul

		And, bersamaan dengan itu menjadi http://localhost:3000/vendor/login


	Scenario: Berhasil login karena sudah ada accessToken ==> DONE

		Given, in url in http://localhost:3000/vendor 

		When, akses http://localhost:3000/vendor

		Then, langsung muncul Dashboard Vendor

	Scenario: ("NEGATIF") 


# 
	Feature Logout User Admin ==> DONE

	Scenario: Berhasil logout dan kembali ke login page 

		Given, in page Dashboard yang ada button Log out

		When, akses http://localhost:3000/vendor/vendor/log-out

		Then, set null localStorage/ kill localstorage

		And, come back to route Page Login


#

	Feature Employee Management ==> DONE

	Scenario: Berhasil menampilkan daftar employee dari vendor tsb

		Given, posisi di page Employee

		When, klik 'Employee Management'

		Then, muncul page list Vendor Employee


		***BUG_01, when klik button ubah, and muncul modal, and setelah update data, error 



# **********************************************ADMIN ~ PART-01******************************************************




















# **********************************************STAFF/ STORE / VENDOR ~ PART-02******************************************************

#01.Feature Staff Store/ Vendor Employee

	Scenario: Berhasil menampilkan date-picker ==> DONE

		*BUG_01, MASIH PANTEK DATA STORE : 1

		Given, posisi di page Report

		When, klik 'Report'

		Then, muncul date-picker


	Scenario: Vendor dapat mengganti status Active-Non Active seorang Employee/staff

		***BUG_01, when klik button update, list daftar produk tidak otomatis ter-update. ==> DONE
	

	Scenario: Update informasi Staff Store ==> "NOT DONE YET, kerana masih bug di back-end soal data VENDOR yang value-nya jadi null"
		

#02.Feature Produk

	Scenario: Berhasil tampil foto produk pada list menu produk 

		***BUG_01, ga ada tampilian pict produk-nya
		

#03.Feature Pengaturan Store  ==> DONE

	Scenario: Tampil Profile Nama Store

	Scenario: Ada buttton untuk update username & password Store


#04.Feature Report/ Laporan Store  ==> DONE
	
	Scenario: Berhasil tampil chart dari data Backend

		***BUG_01, BELOM DAPET STORE ID 

		Given, posisi di page Report

		When, klik 'Report'

		Then, muncul chart buatan Andre


	Scenario: Berhasil menampilkan chart sesuai dengan input-an dari PERIODE DATE-PICKER button ==> DONE

		Given, posisi di page Report

		When, atur periode start tanggal di date-picker

		And, atur periode end tanggal di date-picker

		Then, get object data in console


	Scenario: Berhasil tampil logo Carwash Blue ==> DONE

	Scenario: Gagal Login Store

		Given, posisi di page Login
		When, user ketik dengan username & password yang salah
		Then, muncul notif pemberitahuan kalau username/password salah

	
	

# *********************************************CUSTOMER ~ PART-03******************************************************

#01.Feature Customer

	Scenario: Berhasil login menggunakan Card-ID ==> DONE

		Given, posisi di page customer-member
		When, customer gesek Card-ID
		AND, enter..
		Then, masuk ke page Stores/Layanan Kami (Salon Mobil,Cuci Mobil, Cafe)


	Scenario: Berhasil tampil Navigasi "Profil Anda & Pilih Layanan" ==> DONE 


	Scenario: Berhasil tampil kontent "Profil Saya" ==> DONE


	Scenario: Berhasil tampil kontent "Layanan Kami" ==> DONE
	

	Scenario: Berhasil tampil list Store pada "Layanan Kami" ==> DONE


	Scenario: Berhasil tampil Store List pada "Layanan Kami" ==> DONE 

		*Get api menu store list 

		Given, posisi di page "/customer" 
		And, user click Layanan Kami
		When, generate halaman Layanan Kami
		Then, muncul 4 ( Empat ) Store List VIEW GRID


	Scenario: Berhasil tampil Menu Store yang di pilih pada "Layanan Kami"   ==> DONE 
		
		Given, posisi di page "/customer/store/nama-store"
		When, user click nama-store
		Then, masuk ke page Menu dari Store/nama Store yang di click
		And, fire StoreMenuComponent


	Scenario: Customer berhasil memilih 1 menu store ==> DONE

		Given, posisi ada pada tampilan "Layanan Kami" & ada button "KLIK DI SINI UNTUK MELAKUKAN PEMBAYARAN  (1 TERPILIH)"
		When, user click menu-store
		Then, bertambah 1 jumlah menu yang TERPILIH


	Scenario: Berhasil melakukan transaksi pembelian dari menu store ==> DONE
		
		***BUG_01, data STORE masih pantek "1" ==> DONE


	Scenario: Berhasil Log-out ==> DONE

		* Terdapat layout Header Bar di pojok kanan ada button LOG_OUT

		Given, posisi di Landing Page Profile of Customer "805-Carwash"

		When, click button "Keluar dari My Profile"

		Then, come back again to Login Page


	Scenario: Button Terpilih Menu Store menjadi berwarna kuning 

		Given, posisi ada pada tampilan "Layanan Kami" & ada button "PILIH" berwarna biru
		When, user click button "PILIH"
		Then, kata "PILIH"  berubah menjadi "SUDAH DI PILIH"
		And, warna biru berubah menjadi kuning


	Scenario: Tampilan Modal untuk Customer 


	Scenario: Berhasil melakukan PRINT setelah melanjutkan transakski PEMBAYARAN 

	Scenario: User berhasil LOG-OUT in klik button  


#

	"Tambahin button + & button - "




# *********************************************KASIR ~ PART-04******************************************************

#01.Feature Kasir

	Scenario: Kasir menggunakan card punya member untuk melakukan TOP UP saldo

	Scenario: Kasir membuatkan kartu baru untuk Customer yang belum mempunyai kartu baru 




	






