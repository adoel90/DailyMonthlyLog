/*
	
	Letak file ORIGINAL ini : C:\WorkspaceEclipse\JobClearSession\src\com\mandiri\job\SessionAgain.java



*/





package com.mandiri.job;

import com.documentum.com.DfClientX;
import com.documentum.com.IDfClientX;
import com.documentum.fc.client.IDfClient;
import com.documentum.fc.client.IDfCollection;
import com.documentum.fc.client.IDfSession;
import com.documentum.fc.client.IDfSysObject;
import com.documentum.fc.common.DfException;
import com.documentum.fc.common.DfId;
import com.documentum.fc.common.IDfLoginInfo;
import com.mastersystem.util.MsiQueryUtil;


//Buat class Session
public class SessionAgain {
	//#0, Class Pemanggil 
	public static void main(String[] args) {
		IDfSession sess = null;
		SessionAgain sessionAgain = new SessionAgain();
		
		// Mencoba membuat Event khusus
		try {
			
			// Lakukukan .createSessioin() dengan argumen 3 itu, dan tanamkan ke jobClear dan buat instance dengan variable sess
			sess = sessionAgain.createSession("Administrator", "P@ssw0rd",
					"repo_65sp3");
			
			
			//Lakukan .runJob(sess); yang di tanamkan pada jobClear property with "sess" argumen.
			
			// Yang menjadi pertanyaan adalah  "what is jobClear ?"
			//*** DONE, jobClear adalah objek yang mendapat turunan dari JobClearSession();
			
			//Create object with DFC
			//sessionAgain.createObjectWithDfc(sess);
			
			//Read/ SELECT object with DFC 
			//sessionAgain.selectObject(sess);
			
			//Deleting object with DFC
			sessionAgain.deleteRizal(sess);
			
			//Update/ EDITING object with DFC 
			//sessionAgain.updateObject(sess);
			
			
			
		} catch (Exception e) {
			// try them and you can know what the behaviour is
			e.printStackTrace();
			try {
				sessionAgain.releaseSession(sess);
			} catch (DfException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			
		} finally {
			try {
				sessionAgain.releaseSession(sess);
			} catch (DfException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}



	//  #1, Class createSession
	public IDfSession createSession(String userName, String password,
			String docbase) throws DfException {
		try {
			IDfClientX clientx = new DfClientX();
			IDfClient client = clientx.getLocalClient();
			IDfLoginInfo loginInfoObj = clientx.getLoginInfo();

			if (userName != null) {
				loginInfoObj.setUser(userName);
			} else {
				loginInfoObj.setUser("");
			}
			if (password != null) {
				loginInfoObj.setPassword(password);
			} else {
				loginInfoObj.setPassword("");
			}
			loginInfoObj.setDomain(null);
			return client.newSession(docbase, loginInfoObj);
		} catch (DfException ex) {
			throw new DfException("Error: in createSession()", ex);
		}
	}

	private void releaseSession(IDfSession session) throws DfException {
		try {
			if ((session != null) && (session.isConnected())) {
				session.disconnect();
			}
		} catch (DfException ex) {
			throw new DfException("Error: in releaseSession()", ex);
		}
	}
	

	// #1, Class Create object with DFC
	private void createObjectWithDfc(IDfSession sess) {
		/* 
		 * This class provides the functionality for the client to interact with "dm_sysobject"
		 * objects in the repository. It extends DfPersistentObject
		 * 
		 * IDfSysObject ini adalah class DFC yang menyediakan function untuk client berinteraksi 
		 * dengan dm_sysobject di dalam sebuah repository
		 * 
		 * dm_sysobject adalah sebuah root yang di bawah-nya terdapat dm_document
		 * 
		*/
		
		IDfSysObject sysObjectClassFromDfc;
		
		try{
			//
			sysObjectClassFromDfc= (IDfSysObject)sess.newObject("ct_mandiri_doc");
			sysObjectClassFromDfc.setString("object_name","Adoel_Rachman");
			sysObjectClassFromDfc.setString("subject", "MEAN_Stack");
			sysObjectClassFromDfc.setString("title", "Learning_By_Doing");
			sysObjectClassFromDfc.setString("keywords", "never_give_up");
			sysObjectClassFromDfc.setString("language_code", "JAVA");
			
			sysObjectClassFromDfc.save();
			
			System.out.println("Nama Objek telah di buat !!!");
			
		} catch(DfException e) {
			e.printStackTrace();
		}
		
	}

	
	// #2, Class Read/ SELECT object with DFC 
	public void selectObject(IDfSession sess){
		//IDfSysObject objectFromDfc;
		//StringBuilder query = new StringBuilder("select * from dm_user where r_object_id='1101e2a880008177' ");
		StringBuilder query = new StringBuilder("select * from ct_mandiri_doc ");
		
		
		
		try{
			IDfCollection collectionFromDatabase = MsiQueryUtil.execQuery(sess, query.toString());
			while(collectionFromDatabase.next()){
				//SystemOutPrintln(query);
				
				// ??? *Cara 
				String collectionInstance = collectionFromDatabase.getString("storage_location");
				System.out.println(collectionInstance);
			}
		} catch(Exception e){
			e.printStackTrace();
		}
	}


	// #3, Class Update Object via DFC
	public void updateObject(IDfSession sess){
		IDfSysObject bebas = null;
		
		try{
			bebas = (IDfSysObject)sess.getObject(new DfId("0901e2a88008a158"));
			//bebas.setString("object_name", "Rachman");
			//bebas.setString("object_name", "Rachman");
			
			bebas.setString("subject", "MEAN Stack");
			bebas.setString("title", "Learning By Doing");
			bebas.setString("keywords", "Never give up");
			bebas.setString("language_code", "JAVA");
			bebas.save();

			System.out.println("Ajib !!!");
		}
		
		catch(DfException e){
			e.printStackTrace();
		}
	}

	
	// #4, Class Deleting object with DFC
	public void deleteRizal(IDfSession sess){
		IDfSysObject apaAja = null;
		
		try{
			// 0901e2a88008a144 ==> object_name of Adoel;
			apaAja = (IDfSysObject)sess.getObject(new DfId("0901e2a88008a144"));
			//apaAja.setString("object_name","Rizal_user");
			
			apaAja.destroyAllVersions();
			
		}
		catch(DfException e){
			e.printStackTrace();
		}
	}


	
}
