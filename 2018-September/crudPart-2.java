/*
	
	Letak file ORIGINAL ini : C:\WorkspaceEclipse\JobClearSession\src\com\mandiri\job\JobClearSession.java



*/

package com.mandiri.job;

//DfClientX ==> DFC Java Class with name Class DfCliinetX
/*
	IDfClientX ==> merupakan interface Class dengan nama IDfClientX, di gunakan untuk GUI & 
	tempat input terhadap DFC code.

*/

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

import com.documentum.com.DfClientX;
import com.documentum.com.IDfClientX;
import com.documentum.fc.client.IDfClient;
import com.documentum.fc.client.IDfCollection;
import com.documentum.fc.client.IDfDocument;
import com.documentum.fc.client.IDfSysObject;

/*
	Objek IDfSession merepresentasikan sebuah koneksi yang berhubungan dengan Documentum Server,
	dan menyediakan layanan yang berhubunfan dengan Session.

	Session ==> Pertukaran informasi interaktif secara permanent


*/
import com.documentum.fc.client.IDfSession;
import com.documentum.fc.common.DfException;
import com.documentum.fc.common.DfId;
import com.documentum.fc.common.IDfId;
import com.documentum.fc.common.IDfLoginInfo;
import com.mastersystem.util.MsiQueryUtil;

/*
 * Ini adalah Class JobClearSession, untuk apa ?
 * 
 * 
 * Gw mau buat objek_name Rizal !
 * 
 * Gw mau buat objek_name Febri !
 * 
 * Gw mau select object yang terdapat di 
 * 
 * 
 */
public class JobClearSession {
	public static void main(String[] args) {
		IDfSession sess = null;
		JobClearSession jobClear = new JobClearSession();
		
		// Mencoba membuat Event khusus
		try {
			
			// Lakukukan .createSessioin() dengan argumen 3 itu, dan tanamkan ke jobClear dan buat instance dengan variable sess
			sess = jobClear.createSession("Administrator", "P@ssw0rd",
					"repo_65sp3");
			
			
			//Lakukan .runJob(sess); yang di tanamkan pada jobClear property with "sess" argumen.
			
			// Yang menjadi pertanyaan adalah  "what is jobClear ?"
			//*** DONE, jobClear adalah objek yang mendapat turunan dari JobClearSession();
			
			//jobClear.runJob(sess);
			jobClear.selectUser(sess);
			
		} catch (Exception e) {
			// try them and you can know what the behaviour is
			e.printStackTrace();
			try {
				jobClear.releaseSession(sess);
			} catch (DfException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		} finally {
			try {
				jobClear.releaseSession(sess);
			} catch (DfException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
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
	
	public void selectUser(IDfSession sess){
		
		/*
		
			Menanamkan terhadapa instance query yang memiliki behaviour StringBuilder, dan
			di dalam-nya terdapat argumen "select Dll"
			
			StringBuilder untuk merangkai rangkaian "String"
			
		*/
		
		
		StringBuilder query = new StringBuilder("select * from dm_user where r_object_id='1101e2a880008177' ");
		try {
			
			//Class Interface DFC ini menyediakan akses untuk Collection object
			
			/*
				#1, .execQuery() ==> Eksekusi mengeksekusi SQL Statement & mengembalikan hasil-nya when PROCESSING
				
			*/
			IDfCollection col = MsiQueryUtil.execQuery(sess, query.toString());
			
			/*
				
				#1, col ==> itu dari IDfCollection 
				
				#2, .next()==> Menemukan dan mengembalikan NEXT LENGKAP yang di ambil dari scanner"
				
				
				#3,	Scanner dapat memparse Type Primiitive dan string menggunakan RegEx
					A Scanner breaks its input into tokens using a delimiter pattern, which by default matches whitespace. The resulting tokens may then be converted into values of different types using the various next methods.
			
				#4, while(){} ==> Java while loop di gunakan untuk meng-eksekusi Statement sampai suatu kondisi is true
					
				
				while (condition(s)) {
				
					// Body of loop
				
				}			

			*/
			
			// instance col di tanamkan method next();
			while(col.next()){
				//jalankan method .getString with argumen "user_address" terhadap instance col
				//String username = col.getString("user_address");
				String username = col.getString("user_name");
				//Print terhadap Body Loop (instance "username") tersebut di console
				System.out.println(username);
			}
		} catch (DfException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	public void selectObjecbydfc(IDfSession sess){
		try {
			IDfSysObject sys = (IDfSysObject)sess.getObject(new DfId("0901e2a88008a107"));
			String objectName = sys.getString("object_name");
			System.out.println(objectName);
		} catch (DfException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	public void createObject(IDfSession sess){
		StringBuilder query = new StringBuilder("create ct_mandiri_doc object set object_name = 'abdul' ");
		try {
			
			 MsiQueryUtil.execQuery(sess, query.toString());
			
			
		} catch (DfException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	// Buat Objek by DFC 	
	public void createObjectBydfc(IDfSession sess){
		
		IDfSysObject sys;
		try {
			
			sys = (IDfSysObject)sess.newObject("ct_mandiri_doc");
			sys.setString("object_name", "tes_abdul");
			sys.save();
		} catch (DfException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
	
	/*
	public void runJob(IDfSession sess) {
		StringBuilder query = new StringBuilder("select * from ct_mandiri_doc");
		try {
			IDfCollection col = MsiQueryUtil.execQuery(sess, query.toString());
			
			while(col.next()) {
				System.out.println(col.getString("object_name"));
			}
			MsiQueryUtil.execQuery(sess, query.toString());
		} catch (DfException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	*/
	
	
	
	/*Deleting Objek
	
	public void deleteObject(IDfSession sess) {

		StringBuilder query = new StringBuilder("delete dm_user Abdul_User WHERE S");
		try {
			//IDfCollection col = 
			MsiQueryUtil.execQuery(sess, query.toString());
			
			//while(col.next()) {
				//System.out.println(col.getString("dm_document"));
			//}
//			MsiQueryUtil.execQuery(sess, query.toString());
		} catch (DfException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
*/

/*
 * 
 * 
 * 
 * Pertanyaan - pertanyaan untuk Bro Rizal: 
 * 
 * 	Objek yang di maksud, objek dari sebuah repository yang kemarin, atau buat Document, cabinet, folder, atau apa ?
 * 
 *  Nah, gw udah coba tes aplikasi DFC pakai Swing, jadi bikin User Interface-nya gitu, nah yang jadi masalah,  nge-debug-nya, 
 *  masih rada bingung.
 *  
 *  
 *  Cara Impor Dimension
 *  
 *  
 * 
 * 
 * 
 * 
 * 
 * 
 */
