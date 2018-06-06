# 

	Feature Kartu Baru New

	Scenario: Berhasil membuat kartu baru dengan menggunakan seri number card of Stock Kartu ==> DONE
		
		Given, in page Kartu Baru

		When, kasir masukan serie nomor kartu from Stock Kartu 

		Then, muncul Modal 


	Scenario: Muncul Modal tampilan Member ==> DONE

		Given, in Modal inside page Kartu Baru

		When, Modal khusus tipe "Member" muncul

		Then, kasir melengkapi kolom yang tersedia

	
	Scenario: Berhasil print saat kartu Member di buat ==> DONE
		
		Given, in Modal inside page Kartu Baru

		When, kasir melengkapi kolom yang tersedia

		And, klik button Simpan 

		Then, muncul pop-up Printing

	
	Scenario: Muncul Modal tampilan Taxi Online ==> DONE

	Scenario: Muncul Modal tampilan Non-Member ==> DONE


#

	 Feature Stock Kartu

	 Scenario: Berhasil berubah warna saat seri number berhasil di copy dan di rebuild.

	 	Given, in page Stock Kartu

	 	When, klik button "Copy Nomor Kartu"

	 	Then, warna button berubah menjadi orange

	 	And, tulisan di dalam button menjadi "Copied"

	 	And, fungsi copy to clipboard berjalan.

	