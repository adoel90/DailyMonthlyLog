
#Google: assigning users proper acl in DA Documentum

	- http://pingfang.iteye.com/blog/866966

		***User Privilages

		*** Documentum Security

		*** Object Level Permisssion 


#DQL Statement to create and editing user group

	- https://www.experts-exchange.com/questions/22954134/DQL-statements-for-creating-and-editing-users-groups-and-ACLs.html

#What is an Object Type?

	- https://www.bluefishgroup.com/insights/articles/object-types/  

	- https://hub.packtpub.com/custom-types-documentum/

#

  	CREATE TYPE dctmgurus_dql_doc ( 
  		dg_demo_string_attr STRING (10) (SET LABEL_TEXT='Demo String Attribute',NOT NULL)
	)

	WITH SUPERTYPE "dm_document"
	SET LABEL_TEXT = 'DCTM Gurus DQL Docs'
	PUBLISH
 

#Youtube: Documentum D2 Client

	- https://www.youtube.com/watch?v=NlgFvxrw5oY