Tincan experimentation and correction
=====================================

Vicky Hunt 20/06/2016
---------------------

This is a testing package for Tincan.
Images (screenshots) have been removed to reduce file size. Please ignore any 404 in the console that relate to this.

* Tin can parameters are passed from one page to the next via the links.
Code is found in vicky.js line 21... and reproduced below

		//REALLY IMPORTANT TINCAN STUFF
		//passes Tincan parameters to other pages through the links.
		var vTCLinks=document.getElementsByTagName("a");
		var vParams=location.search;
		for (t=0; t<vTCLinks.length; t++) {
			var vHref=vTCLinks[t].href;
			var vHrefTC=vHref+vParams;
			vTCLinks[t].href=vHrefTC;
		}
		
* A new Tincan is initialised on each page we wish to send statements (no local storage)

* 'Overview' sends an attempted statement

* 'Reading_a_file' sends an experienced statement

* 'Wrap-Up' - Three elements :

QUESTIONS : Tincan code in function vQuiz in vicky.js
Currently sends 0=wrong 1=correct. Question name also stored in result element in the statement. (probably not the best way to do it but there you are)

RATING : Learners must rate (0, 0.5, 1), leave an optional comment and submit before completion statement is sent. 2 clicks.

COMPLETION : Activated when they click submit.

--------------------------------------------------------------------------------------------

NOTES:

Statements can be accessed in 3 ways. 

* Pushed  from our talent LMS to an external LRS. (accounts and settings > security > push TC statements to external LRS) I used SCORMCLOUD cos it's easy and free. 
* LRS details can be coded in the pages (I've used this as a 2nd test for statement transfer).
* We should be able to query the LMS directly, but for the moment I cant do this. Probably just my stupidity. I can query SCORM CLOUD successfully though so I know that these statements are valid, well formed and transferable.

The result:duration part of the statements does nothing for the moment. I haven't addressed this yet.

I guess statement aggregation and analysis would be best done through a noSQL tool like Mongo. This is outside my sphere of competence for the moment, but Talend is the right place to be to learn :) But we won't have huge amounts of data so any json parser thing would do (php, js, R....whatever)

---------------------------------------------------------------------------------------------


EXAMPLE STATEMENTS (taken from SCORMCLOUD after pushing from LMS)
------------------------------------------------------------------

ATTEMPTED

{
    "id": "0374fda4-e7c7-4db7-828d-e157f07455b2",
    "actor": {
        "name": "Vicky",
        "mbox": "mailto:victoriajennethunt@gmail.com",
        "objectType": "Agent"
    },
    "verb": {
        "id": "http://adlnet.gov/expapi/verbs/attempted",
        "display": {
            "en-US": "attempted"
        }
    },
    "result": {
        "duration": "PT0S"
    },
    "timestamp": "2016-06-21T05:55:38.685Z",
    "stored": "2016-06-21T05:55:39.720Z",
    "authority": {
        "name": "mytalentlms",
        "account": {
            "homePage": "http://cloud.scorm.com/",
            "name": "i3KjziBxS5kBy2RR-wo"
        },
        "objectType": "Agent"
    },
    "version": "1.0.0",
    "object": {
        "id": "http://talend.talentlms.com/myuniqueuri/parameterspassedthroughlinks2lrs",
        "objectType": "Activity"
    }
}



RATED

	
{
    "id": "8521d6f5-4914-4a60-9d13-2b585ed146b5",
    "actor": {
        "name": "Vicky",
        "mbox": "mailto:victoriajennethunt@gmail.com",
        "objectType": "Agent"
    },
    "verb": {
        "id": "http://adlnet.gov/expapi/verbs/rated",
        "display": {
            "en-US": "rated"
        }
    },
    "result": {
        "score": {
            "scaled": 0.5
        },
        "response": "this is my comment to check"
    },
    "timestamp": "2016-06-21T05:56:46.656Z",
    "stored": "2016-06-21T05:56:47.797Z",
    "authority": {
        "name": "mytalentlms",
        "account": {
            "homePage": "http://cloud.scorm.com/",
            "name": "i3KjziBxS5kBy2RR-wo"
        },
        "objectType": "Agent"
    },
    "version": "1.0.0",
    "object": {
        "id": "http://talend.talentlms.com/myuniqueuri/parameterspassedthroughlinks2lrs",
        "objectType": "Activity"
    }
}


QUIZ QUESTION

{
    "id": "b5c4857b-f891-4d93-943d-e4a9d2df6338",
    "actor": {
        "name": "Vicky",
        "mbox": "mailto:victoriajennethunt@gmail.com",
        "objectType": "Agent"
    },
    "verb": {
        "id": "http://adlnet.gov/expapi/verbs/answered",
        "display": {
            "en-US": "answered"
        }
    },
    "result": {
        "score": {
            "scaled": 0
        },
        "response": "my_second_question"
    },
    "timestamp": "2016-06-21T05:56:22.264Z",
    "stored": "2016-06-21T05:56:22.794Z",
    "authority": {
        "name": "mytalentlms",
        "account": {
            "homePage": "http://cloud.scorm.com/",
            "name": "i3KjziBxS5kBy2RR-wo"
        },
        "objectType": "Agent"
    },
    "version": "1.0.0",
    "object": {
        "id": "http://talend.talentlms.com/myuniqueuri/parameterspassedthroughlinks2lrs",
        "objectType": "Activity"
    }
}

COMPLETED

{
    "id": "92b1680d-a664-4f0f-a6e3-c1e5207974f1",
    "actor": {
        "name": "Vicky",
        "mbox": "mailto:victoriajennethunt@gmail.com",
        "objectType": "Agent"
    },
    "verb": {
        "id": "http://adlnet.gov/expapi/verbs/completed",
        "display": {
            "en-US": "completed"
        }
    },
    "timestamp": "2016-06-21T05:56:48.512Z",
    "stored": "2016-06-21T05:56:49.035Z",
    "authority": {
        "name": "mytalentlms",
        "account": {
            "homePage": "http://cloud.scorm.com/",
            "name": "i3KjziBxS5kBy2RR-wo"
        },
        "objectType": "Agent"
    },
    "version": "1.0.0",
    "object": {
        "id": "http://talend.talentlms.com/myuniqueuri/parameterspassedthroughlinks2lrs",
        "objectType": "Activity"
    }
}


Laurent passwords
lvaylet
Lvaylet2016

