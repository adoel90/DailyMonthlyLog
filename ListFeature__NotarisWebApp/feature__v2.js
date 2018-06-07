#
	Feature Pagination page

	Scenario: Kursor user berada di page pertama, dan kemudian kursor user ada di baris paling bawah pada page pertama. 
				Nah, mesti-nya muncul page kedua, setelah kursor user melewati batas akhir baris page pertama.
		
		Given, user in Text editor

		And, kursor berada di paling bawah page pertama

		When, user pencet tombol enter

		Then, muncul page kedua kosong

		And, kursor user ready to type again


	Scenario: 