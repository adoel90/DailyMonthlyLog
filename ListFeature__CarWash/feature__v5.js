# 

	Feature Kartu Baru New

	Scenario: Berhasil membuat kartu baru dengan menggunakan seri number card of Stock Kartu 
		
		Given, in page Kartu Baru

		When, kasir masukan serie nomor kartu from Stock Kartu 

		Then, muncul Modal 


	Scenario: Muncul Modal tampilan Member

		Given, in Modal inside page Kartu Baru

		When, Modal khusus tipe Member muncul

		Then, kasir melengkapi kolom yang tersedia

	