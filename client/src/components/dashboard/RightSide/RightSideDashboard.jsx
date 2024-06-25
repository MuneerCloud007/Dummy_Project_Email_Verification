import TableClientSideBlog from "../../TableComponent";
import React, { useState, useEffect } from "react";

function ReactJsClientSideTable() {
    const [dataMyTable, setdataMyTable] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const columns = [
      { column: "FirstName", label: "FirstName" },
      { column: "LastName", label: "LastName" },
      { column: "Company", label: "Company" },

      { column: "position", label: "position" },
      {column:"website",label:"website"},

      { column: "Email address", label: "Email address" },
      {column:"status",label:"status"}



    
  ]

  let data = [         
    {
     "FirstName": "ryan",
     "LastName": "morgan",
     "Company": "oakhilladvisors.com",
     "Email address": "rmorgan@oakhilladvisors.com",
     "position":"Principal & Salesforce Administrator",
     "profile_img":"https://media.licdn.com/dms/image/C4E03AQE2i-7QA0wVRA/profile-displayphoto-shrink_200_200/0/1573053332292?e=1724889600&v=beta&t=nNZYqN9Zn1wD5xs81Aw-Zx-PL33c49ZrNEStQObIrcE",
     "status": "valid",
     "Folder": 1
    },
    {
     "FirstName": "Raj",
     "LastName": "T",
     "Company": "home.barclays",
     "Email address": "Not found",
     "position":"Sr. Salesforce Administrator/ Business Analyst",
     "profile_img":"https://media.licdn.com/dms/image/D4D03AQEJPA-7zJ2JKg/profile-displayphoto-shrink_200_200/0/1707504403197?e=1724889600&v=beta&t=TU3We5E4wu3lufkO18X_Qcyy4auGsLlp59YJlwKACv4",
     "status": "invalid",
     "Folder": 2
    },
    
    {
     "FirstName": "Laila",
     "LastName": "M.",
     "Company": "excelapts.com",
     "Email address": "Not found",
     "position":"Salesforce Administrator",
     "profile_img":"https://media.licdn.com/dms/image/D4E03AQGeIGZ0B-gwAw/profile-displayphoto-shrink_200_200/0/1690082477657?e=1724889600&v=beta&t=vgmblbQDaTKS274AQsJSZBg6KFRaAi8IbzdhB3sw5mM",
     "status": "invalid",
     "Folder": 1
    },
    {
       "FirstName": "Nimi P ",
       "LastName": "Baby",
       "Company": "hilton.com",
       "Email address": "nimi.p@hilton.com",
       "position":"Salesforce Administrator",
       "profile_img":"https://media.licdn.com/dms/image/D4E03AQEH1fH08MRv2g/profile-displayphoto-shrink_200_200/0/1707436051644?e=1724889600&v=beta&t=1dMVZj2-Cg_HSOti4mmMYeOrCkLtwWtKAvPiduj8DhM",
       "status": "valid",
       "Folder": 1
      },
    {
     "FirstName": "Sana",
     "LastName": "Waleed",
     "Company": "gravie.com",
     "Email address": "swaleed@gravie.com",
     "position":"Salesforce administrator/developer",
     "profile_img":"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
     "status": "valid",
     "Folder": 1
    },
   
    {
     "FirstName": "Sue",
     "LastName": "Cannon",
     "Company": "carrier.utc.com",
     "Email address": "susan.cannon@carrier.utc.com",
     "position":"Sr. Salesforce Administrator",
     "profile_img":"https://media.licdn.com/dms/image/C4E03AQEr8XEzVttS_g/profile-displayphoto-shrink_200_200/0/1516346758362?e=1724889600&v=beta&t=e1Ia4y3EOQsJsbFwe-L6hREwcrDAdRa_ftEvbYx0pDE",
   
     "status": "valid",
     "Folder": 1
    },
    {
       "FirstName": "Selcuk",
       "LastName": "G.",
       "position":"Salesforce Administrator",
       "profile_img":"https://media.licdn.com/dms/image/C4D03AQFKDDi8ASkbKQ/profile-displayphoto-shrink_200_200/0/1598295484468?e=1724889600&v=beta&t=en0PGKxShN--mvjWptBtZv2iqpSAa8xGq3xPaooxpiE",
       "Company": "raptive.com",
       "Email address": "no-company",
       "status": "invalid",
       "Folder": 3
      },
      {
       "FirstName": "Efe",
       "LastName": "Oztas",
       "Company": "chubb.com",
       "Email address": "eoztas@chubb.com",
       "position":"Salesforce Administrator",
       "profile_img":"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
     
       "status": "catch-all",
       "Folder": 4
      },
      {
       "FirstName": "Carlos",
       "LastName": "Frias",
       "Company": "onepeloton.com",
       "Email address": "carlosfrias@onepeloton.com",
       "position":"Senior Salesforce Administrator",
       "profile_img":"https://media.licdn.com/dms/image/C4D03AQEcFh5lDKBxdA/profile-displayphoto-shrink_200_200/0/1640732860740?e=1724889600&v=beta&t=fkvYGuBmBmF5MhrOOm9kOlGu7lAeiT-AWQdDOlXOOBU",
       "status": "valid",
       "Folder": 1
      },
      {
       "FirstName": "Sasha",
       "LastName": "Daich",
       "Company": "emulatebio.com",
       "Email address": "sasha.daich@emulatebio.com ",
       "position":"Senior Salesforce Administrator",
       "profile_img":"https://media.licdn.com/dms/image/D4E03AQEpOi-vJ5D24Q/profile-displayphoto-shrink_200_200/0/1702225340098?e=1724889600&v=beta&t=Vg6FLwVk1_9GCEiAKOZY5neVfcS8Oekttke1kgIjbgs",
       "status": "valid",
       "Folder": 3
      },
      {
       "FirstName": "Sally",
       "LastName": "S.",
       "Company": "zillow.com",
       "position":"Senior Salesforce Administrator",
       "profile_img":"https://media.licdn.com/dms/image/D4E03AQENrTAe_NsSww/profile-displayphoto-shrink_200_200/0/1718265925738?e=1724889600&v=beta&t=c4MC6ntEeMqsqCRTJ7IzjiEFlqYrpHR_g7ERIeqB4Bg",
       "Email address": "sallys@zillow.com",
       "status": "catch-all",
       "Folder": 2
      },
      
      {
       "FirstName": "Fidan",
       "LastName": "A",
       "Company": "columbia.edu",
       "position":"Salesforce Administrator",
       "profile_img":"https://media.licdn.com/dms/image/D5603AQFnzjBfVn5BIA/profile-displayphoto-shrink_200_200/0/1695758134930?e=1724889600&v=beta&t=y7OFCvk3jxiTf_9LQ2O6eBCqJzQ4QJHkV1YRe43d3BA",
     
     
       "Email address": "Not found",
       "status": "invalid",
       "Folder": 2
      },
      {
       "FirstName": "Fong",
       "LastName": "Chau",
       "Company": "iongard.com",
       "position":"Salesforce Administrator",
       "Email address": "fong.chau@liongard.com",
       "profile_img":"https://www.linkedin.com/sales/lead/ACwAAA4MwXABiK0QMJF97kroZb8mcd5wi9gD8iw,NAME_SEARCH,FXlt?_ntb=eO%2BjjvwiRIihDCyyDUG68Q%3D%3D&lipi=urn%3Ali%3Apage%3Ad_sales2_search_people%3BsLv16kkmSaOim65D7MCQYw%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_sales2_search_people-view_lead_panel_via_search_lead_image&snfl=PNbXD2J8SWGDdYGcv7z67Q%3D%3D",
       "status": "catch-all",
       "Folder": 1
      },
      {
       "FirstName": "Rochella",
       "LastName": "Fallon",
       "Company": "dfamilk.com",
       "position":"Salesforce Administrator",
       "profile_img":"https://media.licdn.com/dms/image/D4E03AQF8XYbhB_plLA/profile-displayphoto-shrink_200_200/0/1716399753667?e=1724889600&v=beta&t=zpALc7UGOTOUSFDRyIcfecFwyfnYnoD28862xenxDck",
       "Email address": "rfallon@dfamilk.com",
       "status": "valid",
       "Folder": 1
      },
   
   
    {
     "FirstName": "Prativa",
     "LastName": "D",
     "Company": "Voya.com",
     "Email address": "prativa.d@Voya.com",
     "position":"Salesforce Administrator/Developer ",
     "profile_img":"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
     "status": "valid",
     "Folder": 2
    },
    {
       "FirstName": "Svetlana",
       "LastName": "Kirienko",
       "Company": "onilab.com",
       "Email address": "svetlana.kirienko@onilab.com",
       "position":"Senior Salesforce Administrator",
       "profile_img":"https://media.licdn.com/dms/image/C4D03AQELtmiLzKU5wQ/profile-displayphoto-shrink_200_200/0/1558689771693?e=1724889600&v=beta&t=6gei64HrRgswHzqOUiwi_FRiVlYWVU8njQqtmcxi2p4",
       "status": "catch-all",
       "Folder": 2
      },
      {
       "FirstName": "Joshua",
       "LastName": "Williams",
       "Company": "rochester.rr.com",
       "position":"Sr. Salesforce Administrator",
       "profile_img":"https://media.licdn.com/dms/image/C4D03AQExB_ltGwU9yA/profile-displayphoto-shrink_200_200/0/1639085105050?e=1724889600&v=beta&t=1XMrA7a3VYKWi3we4dP7hXeqz0HUUGTOI6pUnLbkjv4",
     
       "Email address": "jwilliams29@rochester.rr.com",
       "status": "valid",
       "Folder": 1
      },
    {
     "FirstName": "Michael",
     "LastName": "Fazio",
     "Company": "afreebird.org",
     "Email address": "michael@afreebird.org",
     "status": "valid",
     "Folder": 3
    },
    
    
    {
     "FirstName": "Svetlana",
     "LastName": "Kirienko",
     "Company": "onilab.com",
     "Email address": "svetlana.kirienko@onilab.com",
     "position":"Senior Salesforce Administrator",
     "profile_img":"https://media.licdn.com/dms/image/C4D03AQELtmiLzKU5wQ/profile-displayphoto-shrink_200_200/0/1558689771693?e=1724889600&v=beta&t=6gei64HrRgswHzqOUiwi_FRiVlYWVU8njQqtmcxi2p4",
     "status": "catch-all",
     "Folder": 2
    },
    
    {
     "FirstName": "Noa",
     "LastName": "Dayan",
     "Company": "makerbot.com",
     "Email address": "noa.dayan@makerbot.com",
     "position":"Senior Salesforce Administrator",
     "profile_img":"https://media.licdn.com/dms/image/C5603AQFDnnk5taX73A/profile-displayphoto-shrink_200_200/0/1517041330636?e=1724889600&v=beta&t=g-QBX5dv09daRrqXWOGVHQGT8tJVoKJkFH_4djWQv-o",
     "status": "catch-all",
     "Folder": 3
    },
    {
       "FirstName": "Meghana",
       "LastName": "R",
       "Company": "pentegra.com",
       "Email address": "Not found",
       "position":"Senior Salesforce Administrator",
       "profile_img":"https://media.licdn.com/dms/image/C5603AQFDnnk5taX73A/profile-displayphoto-shrink_200_200/0/1517041330636?e=1724889600&v=beta&t=g-QBX5dv09daRrqXWOGVHQGT8tJVoKJkFH_4djWQv-o",
       "status": "Invalid",
       "Folder": 3
      },
      {
       "FirstName": "Sana",
       "LastName": "Jamal",
       "Company": "themyersbriggs.com",
       "position":"Senior Salesforce Administrator",
       "profile_img":"https://media.licdn.com/dms/image/D4E03AQF57YO-d-qVnA/profile-displayphoto-shrink_200_200/0/1719283086176?e=1724889600&v=beta&t=7MEgumX5680ksRiusqK0s7vrTpMsqOSjXdr3Izke7AQ",
       "Email address": "sjamal@themyersbriggs.com",
       "status": "valid",
       "Folder": 1
      },
      {
       "FirstName": "Reese",
       "LastName": "Harris",
       "Company": "coherehealth.com",
       "position":"Salesforce Administrator",
       "profile_img":"https://media.licdn.com/dms/image/C5103AQEf81TXdfIZBg/profile-displayphoto-shrink_200_200/0/1516953231224?e=1724889600&v=beta&t=Ju0uFoSaBG3KNMoy8gNsuBO4223H1yGxcODcXwoNxCs",
       "Email address": "reese.harris@coherehealth.com",
       "status": "catch-all",
       "Folder": 4
      },
   
      {
       "FirstName": "Mohamed",
       "LastName": "Imran,MBA",
       "Company": "kcecareers.com",
       "position":"Salesforce Administrator",
       "profile_img":"https://media.licdn.com/dms/image/D4E03AQFsaHziPPIyOQ/profile-displayphoto-shrink_200_200/0/1699236706962?e=1724889600&v=beta&t=Cqb9D02RBvsEgJNC7mQVj8KZ9cgdlp2jqYvNFfYZCmE",
       "Email address": "Not found",
       "status": "Invalid",
       "Folder": 4
      },
      {
       "FirstName": "Kaylin",
       "LastName": "Cooley",
       "Company": "no-domain",
       "position":"Salesforce Administrato",
       "profile_img":"https://media.licdn.com/dms/image/D5603AQE7-c1F-Glz6A/profile-displayphoto-shrink_200_200/0/1718759258965?e=1724889600&v=beta&t=3xQ9wxo9AVMD1kY0Ye2EaR9Yww_G5M7pnWNjLhYMsqk",
       "Email address": "invalid",
       "status": "valid",
       "Folder": 2
      },
      {
       "FirstName": "Moiz",
       "LastName": "Manzoor",
       "Company": "midatlanticmachinery.com",
       "profile_img":"https://media.licdn.com/dms/image/D4D03AQFzcqSFqpHJcw/profile-displayphoto-shrink_200_200/0/1708741352992?e=1724889600&v=beta&t=OWNH-R8Bl1OI3Tp-tGv5W8JQVONyHt4pdmQFTCoZTxc",
       "position":"Salesforce Administrator",
       "Email address": "mmanzoor@midatlanticmachinery.com",
       "status": "valid",
       "Folder": 4
      },
      {
       "FirstName": "Mohammad",
       "LastName": "Javed",
       "Company": "cvshealth.com",
       "Email address": "no-company",
       "position":"Salesforce Administrator",
       "profile_img":"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
       "status": "invalid",
       "Folder": 1
      },
      ]
      data=data.map(entry => {
        const dotIndex = entry["Company"].indexOf('.');
        if (dotIndex !== -1) {
          entry["Company"]=entry["Company"].slice(0, dotIndex);
        }
      

      

        entry.website = `https://www.${entry.Company}.com`;
        return entry;
    });
  
    useEffect(() => {
      getMyTable();
    }, []);
  
    useEffect(() => {
      getMyTable();
    }, []);
  
    const getMyTable = async (pdateFrom, pdateTo) => {
      try {
        setIsLoading(true);
        const response = [
          { ID: 1, Name: "John Doe", Title: "Software Engineer" },
          { ID: 2, Name: "Jane Smith", Title: "Product Manager" },
          { ID: 3, Name: "Bob Johnson", Title: "UI/UX Designer" },
          { ID: 4, Name: "Alice Williams", Title: "Data Scientist" },
          { ID: 5, Name: "Charlie Brown", Title: "DevOps Engineer" },
          { ID: 6, Name: "Eva Davis", Title: "QA Tester" },
          { ID: 7, Name: "Frank White", Title: "Business Analyst" },
          { ID: 8, Name: "John Doe", Title: "Software Engineer" },
          { ID: 9, Name: "Jane Smith", Title: "Product Manager" },
          { ID: 10, Name: "Bob Johnson", Title: "UI/UX Designer" },
          { ID: 11, Name: "Alice Williams", Title: "Data Scientist" },
          { ID: 12, Name: "Charlie Brown", Title: "DevOps Engineer" },
          { ID: 13, Name: "Eva Davis", Title: "QA Tester" },
          { ID: 14, Name: "Frank White", Title: "Business Analyst" },
          { ID: 15, Name: "John Doe", Title: "Software Engineer" },
          { ID: 16, Name: "Jane Smith", Title: "Product Manager" },
          { ID: 17, Name: "Bob Johnson", Title: "UI/UX Designer" },
          { ID: 18, Name: "Alice Williams", Title: "Data Scientist" },
          { ID: 19, Name: "Charlie Brown", Title: "DevOps Engineer" },
          { ID: 20, Name: "Eva Davis", Title: "QA Tester" },
          { ID: 21, Name: "Frank White", Title: "Business Analyst" },
          { ID: 22, Name: "John Doe", Title: "Software Engineer" },
          { ID: 23, Name: "Jane Smith", Title: "Product Manager" },
          { ID: 24, Name: "Bob Johnson", Title: "UI/UX Designer" },
          { ID: 25, Name: "Alice Williams", Title: "Data Scientist" },
          { ID: 26, Name: "Charlie Brown", Title: "DevOps Engineer" },
          { ID: 27, Name: "Eva Davis", Title: "QA Tester" },
          { ID: 28, Name: "Frank White", Title: "Business Analyst" },
          { ID: 29, Name: "John Doe", Title: "Software Engineer" },
          { ID: 30, Name: "Jane Smith", Title: "Product Manager" },
          { ID: 31, Name: "Bob Johnson", Title: "UI/UX Designer" },
          { ID: 32, Name: "Alice Williams", Title: "Data Scientist" },
          { ID: 33, Name: "Charlie Brown", Title: "DevOps Engineer" },
          { ID: 34, Name: "Eva Davis", Title: "QA Tester" },
          { ID: 35, Name: "Frank White", Title: "Business Analyst" },
        ];
        // Set state values
        setdataMyTable(response || []);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <div className=" table">

        <TableClientSideBlog
          headers={columns}
          data={data}
          isLoading={isLoading}
          loadingTag={<h1>Loading...</h1>}
        />
      </div>
    );
  }
  
  export default ReactJsClientSideTable