#Create Documentum Applicaton : Insurance App

	- 

		• A custom type, insurance_claim : represents an insurance claim form. List below properties of insurance_claim

			***status

			***date_of_service

			***physician_name

			***patient_name

			***procedure_code

		• A lifecycle, claim_lifecycle, contains the states that support a typical insurance claim process. Objects of type insurance_claim are attached to this lifecycle.

			***Submitted State

			***Processing State

			***Adjudication State

			***Paid State

			***Denied State

		• Two permission set templates, claim_processors and claim_adjudicators, that define users who
		can process and approve the insurance claims that are attached to the claim_lifecycle lifecycle.

		• An alias set, claim_aliasset, is used in conjunction with the two permission sets, so that the
		application does not have to define specific users during design time.

			***processing_user

			***adjudication_user

		• Two installation parameters, processing_parameter and adjudication_parameter, allow you to
		specify the values for the aliases in the alias set at installation time.