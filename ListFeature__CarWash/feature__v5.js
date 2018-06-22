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

	 	And, fungsi copy to clipboard berjalan

	0032018062144876

	215 === wahyundut

	doel === 76


#

	http://128.199.177.16:3307/member/remove?ct_id=3&accessToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1X2lkIjozLCJ1X25hbWUiOiJLYXNpciIsInVfdXNlcm5hbWUiOiJrYXNpciIsInVfZW1haWwiOiJrYXNpckBlbWFpbC5jb20iLCJ1X3Bhc3N3b3JkIjoiN2MyMjJmYjI5MjdkODI4YWYyMmY1OTIxMzRlODkzMjQ4MDYzN2MwZCIsInVsX2lkIjozLCJjcmVhdGVkX2F0IjoiMjAxOC0wMy0xMVQyMzozMTo1OC43MThaIiwidXBkYXRlZF9hdCI6IjIwMTgtMDQtMDZUMDY6MjA6MDAuMDAwWiIsImRlbGV0ZWRfYXQiOm51bGwsInVsX25hbWUiOiJLYXNpciJ9.0H8n1xM_4BkoS6tgBSfwiob0zaVTFseFosigB1d4T7I