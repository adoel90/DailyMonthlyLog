

- 0011524969052918 Member 

- Taxi Online 0151513099408336 Jamaludin ==> BERHASIL REFUND
- Taxi Online 0151513099742807 Yusup
- Taxi Online 0151513139180314 Andi
- Taxi Online 0151523603967699 Rachman Hidayat


# 

	Feature Kasir 

	Scenario: Berhasil Refund All Member : Taxi Online, Non Member, Member ==> DONE

		***BUG
		
		Given, in page Refund Kartu

		When, kasir gesek kartu

		Then, muncul window print-out

		And, tidak muncul Modal Success REFUNDING CARD

		And, tiba- tiba langsung muncul "Maaf, kartu yang Anda gunakan tidak bisa di refund"

		***BUG FIXED ==> DONE

		Given, in page Refund Kartu

		When, kasir gesek kartu

		Then, Muncul Modal Succes REFUNDING 

		And, muncul window print-out

		


	Scenario: Member tidak bisa melakukan REFUND 

		Given, in page Refund Kartu

		When, kasir gesek kartu

		And, Muncul Modal Keterangan Member, dll

		And, Kasir Klik Button Refund

		Then, Muncul Keterangan "Maaf, kartu yang Anda gunakan tidak bisa di refund"



