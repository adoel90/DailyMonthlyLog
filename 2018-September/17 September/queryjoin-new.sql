delete from DM_MANDIRI_REPOSITORY_docbase.dbo.COLID_CORE

insert into DM_MANDIRI_REPOSITORY_docbase.dbo.COLID_CORE select LTRIM(RTRIM(cfcold.CCDCID)), LTRIM(RTRIM(cfcold.CCCIF)), LTRIM(RTRIM(cfcold.CCTHLD)),LTRIM(RTRIM(cfcold.CCMTYP)),LTRIM(RTRIM(cfcolde.BIIKNO)),LTRIM(RTRIM(cfcolde.BIIKD7)),LTRIM(RTRIM(cfcolx.ACCTNO)) 
from BMSTGCBS.dbo.CFCOLD as cfcold join BMSTGCBS.dbo.CFCOLDE as cfcolde on cfcold.CCDCID = cfcolde.CCDCID 
join BMSTGCBS.dbo.CFCOLX as cfcolx on cfcold.CCDCID = cfcolx.CCDCID join BMSTGCBS.dbo.LNMAST as lnmast on lnmast.ACCTNO = cfcolx.ACCTNO where lnmast.STATUS != 2 and lnmast.STATUS != 2

insert into DM_MANDIRI_REPOSITORY_docbase.dbo.COLID_CORE(collateral_id,cif_number,debtor_name,account_number) select LTRIM(RTRIM(lncolx.CCDCID)), LTRIM(RTRIM(lncolx.CCDCIF)), LTRIM(RTRIM(lnmast.SNAME)), LTRIM(RTRIM(lnmast.ACCTNO)) from BMSTGCBS.dbo.LNCOLX as lncolx join BMSTGCBS.dbo.LNMAST as lnmast on lncolx.CCAPNO = lnmast.AANO and lncolx.CCFCDE = lnmast.FCODE and lncolx.ACTSEQ = lnmast.FSEQ where lnmast.STATUS != 2 and lnmast.STATUS != 2