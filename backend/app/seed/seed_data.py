from sqlalchemy.orm import Session
from app.services.auth_service import create_admin_user
from app.repositories.knowledge_repository import create
from app.schemas.knowledge_base import KnowledgeBaseCreate

# Note: figures like fees, cutoffs, and deadlines change every academic year.
# These entries point students to the official source for those; everything
# else here (history, departments, contacts, facilities) is stable and sourced
# from mitindia.edu / hostel.mitindia.edu.
VERIFY_NOTE = "Please check mitindia.edu or annauniv.edu for the current academic year's figures, as this changes annually."

SEED_ENTRIES = [
    # Departments
    KnowledgeBaseCreate(
        category="Departments",
        question="What departments are available at MIT Anna University?",
        keywords="departments list courses programs engineering branches",
        answer="MIT Campus, Anna University offers 9 departments: Aeronautical Engineering (est. 1949), Automobile Engineering (est. 1949), Electronics Engineering (est. 1949), Instrumentation Engineering (est. 1949), Production Technology (est. 1977), Rubber and Plastics Technology (est. 1988), Information Technology (est. 2001), Computer Technology (est. 2010), and Applied Science and Humanities (est. 2021)."
    ),
    KnowledgeBaseCreate(
        category="Departments",
        question="Where is the Computer Technology department and who is the HOD?",
        keywords="computer science technology department location building CSE CT HOD head",
        answer="The Computer Technology department (established 2010) is on the MIT Campus, Chromepet. The Head of Department is Dr. Ponsy R K Sathia Bhama. Details: departments.auegov.ac.in/ct, or ask at the department office for the exact location."
    ),
    KnowledgeBaseCreate(
        category="Departments",
        question="Where is the Aeronautical Engineering department and who is the HOD?",
        keywords="aeronautical aerospace engineering department location aero HOD head",
        answer="Aeronautical Engineering, established in 1949, is one of MIT's founding flagship departments — MIT was the first institute in India to offer it. The Head of Department is Dr. C. Senthilkumar. More details are at departments.auegov.ac.in/aerospace, or ask at the department office for the exact location."
    ),
    KnowledgeBaseCreate(
        category="Departments",
        question="Where is the Electronics Engineering department and who is the HOD?",
        keywords="electronics communication ECE department location HOD head",
        answer="Electronics Engineering, established in 1949, is on the MIT Campus. The Head of Department is Dr. P.T.V. Bhuvaneswari. Details: departments.auegov.ac.in/elect, or ask at the department office for the exact location."
    ),
    KnowledgeBaseCreate(
        category="Departments",
        question="Where is the Information Technology department and who is the HOD?",
        keywords="information technology IT department location HOD head",
        answer="Information Technology, established in 2001, is on the MIT Campus. The Head of Department is Dr. Radha Senthilkumar. Details: departments.auegov.ac.in/it, or ask at the department office for the exact location."
    ),
    KnowledgeBaseCreate(
        category="Departments",
        question="Who is the HOD of Automobile Engineering at MIT?",
        keywords="automobile engineering HOD head department",
        answer="The Head of Department for Automobile Engineering (established 1949) at MIT is Dr. K. Annamalai. Details: departments.auegov.ac.in/auto."
    ),
    KnowledgeBaseCreate(
        category="Departments",
        question="Who is the HOD of Instrumentation Engineering at MIT?",
        keywords="instrumentation engineering HOD head department",
        answer="The Head of Department for Instrumentation Engineering (established 1949) at MIT is Dr. D. Manamalli. Details: departments.auegov.ac.in/instru."
    ),
    KnowledgeBaseCreate(
        category="Departments",
        question="Who is the HOD of Production Technology at MIT?",
        keywords="production technology engineering HOD head department manufacturing",
        answer="The Head of Department for Production Technology (established 1977) at MIT is Dr. J. Jancirani. Details: departments.auegov.ac.in/prod."
    ),
    KnowledgeBaseCreate(
        category="Departments",
        question="Who is the HOD of Rubber and Plastics Technology at MIT?",
        keywords="rubber plastics technology HOD head department",
        answer="The Head of Department for Rubber and Plastics Technology (established 1988) at MIT is Dr. L. S. Jayakumari. Details: departments.auegov.ac.in/rpt."
    ),
    KnowledgeBaseCreate(
        category="Departments",
        question="Who is the HOD of Applied Science and Humanities at MIT?",
        keywords="applied science humanities HOD head department",
        answer="The Head of Department for Applied Science and Humanities (established 2021) at MIT is Dr. J. Baskar Babujee. Details: departments.auegov.ac.in/ash."
    ),
    KnowledgeBaseCreate(
        category="Departments",
        question="Who are all the current HODs at MIT?",
        keywords="HOD list all heads departments names current",
        answer="Current Heads of Department at MIT: Aeronautical Engineering - Dr. C. Senthilkumar; Automobile Engineering - Dr. K. Annamalai; Electronics Engineering - Dr. P.T.V. Bhuvaneswari; Instrumentation Engineering - Dr. D. Manamalli; Production Technology - Dr. J. Jancirani; Rubber and Plastics Technology - Dr. L. S. Jayakumari; Information Technology - Dr. Radha Senthilkumar; Computer Technology - Dr. Ponsy R K Sathia Bhama; Applied Science and Humanities - Dr. J. Baskar Babujee. This list can change — check mitindia.edu/hods for the latest."
    ),
    KnowledgeBaseCreate(
        category="Departments",
        question="What courses does MIT offer for UG and PG?",
        keywords="UG PG courses programs BE BTech ME MTech number",
        answer="MIT Campus currently offers 11 UG programs and 14 PG programs, along with PhD research. Recent intake includes B.E./B.Tech programs such as Aeronautical, Automobile, Computer Science and Engineering, Electronics and Communication, Electronics and Instrumentation, Rubber and Plastics Technology, Information Technology, and Artificial Intelligence and Data Science. For the exact current list, check the Academic Courses page via annauniv.edu."
    ),

    # Admission
    KnowledgeBaseCreate(
        category="Departments",
        question="Who are the Centre Directors at MIT?",
        keywords="centre director research centres names AUKBC aerospace IoT siemens CEAT robotics",
        answer="MIT Campus research centre directors: AU-KBC Research Centre - Dr. P. Jayashree; Centre for Aerospace Research - Dr. K. Senthil Kumar; Centre for Internet of Things - Dr. P. T. V. Bhuvaneswari; Siemens Centre of Excellence (Nodal Officer) - Dr. Sabitha Ramakrishnan; Centre for Excellence in Automobile Technology - Dr. K. Arunachalam; Centre for Robotics and Automation - Dr. K. Latha."
    ),
    KnowledgeBaseCreate(
        category="Admission",
        question="What is the admission process at MIT Anna University?",
        keywords="admission process apply how to join entrance exam TNEA counselling",
        answer="Admission to MIT's B.E./B.Tech (UG) programs is entirely through TNEA (Tamil Nadu Engineering Admissions), a single-window state-wide counselling process — there is no separate entrance exam for MIT. Basic eligibility is 10+2 (Higher Secondary) in the Science stream with Physics, Chemistry, and Mathematics. M.Tech/M.E. admission typically requires GATE or TANCET, and Ph.D./MS applications are made directly to the admission cell. Apply for TNEA counselling via the official portal (tnea.ac.in / auegov.ac.in)."
    ),
    KnowledgeBaseCreate(
        category="Admission",
        question="What is the last date for admission?",
        keywords="last date deadline admission cutoff date schedule round",
        answer=f"Admission dates are set year to year by Anna University as part of the TNEA counselling schedule, and reporting for each round typically happens over 2-3 days with fee payment done online. {VERIFY_NOTE}"
    ),
    KnowledgeBaseCreate(
        category="Admission",
        question="What is the cutoff for Computer Science and Engineering at MIT?",
        keywords="cutoff CSE computer science engineering rank closing marks",
        answer="TNEA General category closing rank (Home State) for BE Computer Science and Engineering at MIT: 2024 - 327, 2025 - 365. 2026 cutoffs are not released yet; any 2026 number you see elsewhere is only a prediction, not official. Check the TNEA portal for confirmed current-year ranks."
    ),
    KnowledgeBaseCreate(
        category="Admission",
        question="What is the cutoff for Electronics and Communication Engineering at MIT?",
        keywords="cutoff ECE electronics communication engineering rank closing marks",
        answer="TNEA General category closing rank (Home State) for BE Electronics and Communication Engineering at MIT: 2024 - 700, 2025 - 880. 2026 cutoffs are not released yet; any 2026 number you see elsewhere is only a prediction, not official. Check the TNEA portal for confirmed current-year ranks."
    ),
    KnowledgeBaseCreate(
        category="Admission",
        question="What is the cutoff for Electronics and Instrumentation Engineering at MIT?",
        keywords="cutoff EIE electronics instrumentation engineering rank closing marks",
        answer="TNEA General category closing rank (Home State) for BE Electronics and Instrumentation Engineering at MIT: 2024 - 2016, 2025 - 2529. 2026 cutoffs are not released yet; any 2026 number you see elsewhere is only a prediction, not official. Check the TNEA portal for confirmed current-year ranks."
    ),
    KnowledgeBaseCreate(
        category="Admission",
        question="What is the cutoff for Aeronautical Engineering at MIT?",
        keywords="cutoff aeronautical aerospace engineering rank closing marks",
        answer="TNEA General category closing rank (Home State) for BE Aeronautical Engineering at MIT: 2024 - 1812, 2025 - 2645. 2026 cutoffs are not released yet; any 2026 number you see elsewhere is only a prediction, not official. Check the TNEA portal for confirmed current-year ranks."
    ),
    KnowledgeBaseCreate(
        category="Admission",
        question="What is the cutoff for Automobile Engineering at MIT?",
        keywords="cutoff automobile engineering rank closing marks",
        answer="TNEA General category closing rank (Home State) for BE Automobile Engineering at MIT: 2024 - 6553, 2025 - 7443. 2026 cutoffs are not released yet; any 2026 number you see elsewhere is only a prediction, not official. Check the TNEA portal for confirmed current-year ranks."
    ),
    KnowledgeBaseCreate(
        category="Admission",
        question="What is the cutoff for Production Engineering at MIT?",
        keywords="cutoff production engineering manufacturing rank closing marks",
        answer="TNEA General category closing rank (Home State) for BE Production Engineering at MIT: 2024 - 10386, 2025 - 12275. 2026 cutoffs are not released yet; any 2026 number you see elsewhere is only a prediction, not official. Check the TNEA portal for confirmed current-year ranks."
    ),
    KnowledgeBaseCreate(
        category="Admission",
        question="What is the cutoff for Information Technology at MIT?",
        keywords="cutoff information technology IT rank closing marks",
        answer="TNEA General category closing rank (Home State) for B.Tech Information Technology at MIT: 2024 - 1158, 2025 - 1254. 2026 cutoffs are not released yet; any 2026 number you see elsewhere is only a prediction, not official. Check the TNEA portal for confirmed current-year ranks."
    ),
    KnowledgeBaseCreate(
        category="Admission",
        question="What is the cutoff for Artificial Intelligence and Data Science at MIT?",
        keywords="cutoff artificial intelligence data science AI DS rank closing marks",
        answer="TNEA General category closing rank (Home State) for B.Tech Artificial Intelligence and Data Science at MIT: 2024 - 750, 2025 - 854. 2026 cutoffs are not released yet; any 2026 number you see elsewhere is only a prediction, not official. Check the TNEA portal for confirmed current-year ranks."
    ),
    KnowledgeBaseCreate(
        category="Admission",
        question="What is the cutoff for Robotics and Automation at MIT?",
        keywords="cutoff robotics automation rank closing marks",
        answer="TNEA General category closing rank (Home State) for B.Tech Robotics and Automation at MIT: 2024 - 2118, 2025 - 2864. 2026 cutoffs are not released yet; any 2026 number you see elsewhere is only a prediction, not official. Check the TNEA portal for confirmed current-year ranks."
    ),
    KnowledgeBaseCreate(
        category="Admission",
        question="What is the cutoff for Rubber and Plastics Technology at MIT?",
        keywords="cutoff rubber plastics technology rank closing marks",
        answer="TNEA General category closing rank (Home State) for B.Tech Rubber and Plastic Technology at MIT: 2024 - 18795, 2025 - 21148. 2026 cutoffs are not released yet; any 2026 number you see elsewhere is only a prediction, not official. Check the TNEA portal for confirmed current-year ranks."
    ),
    KnowledgeBaseCreate(
        category="Admission",
        question="What is the cutoff for MIT Anna University?",
        keywords="cutoff marks rank admission eligibility score TNEA general",
        answer="MIT's TNEA cutoff (closing rank) varies by department — for example CSE closed around rank 365 and Rubber & Plastics Technology around rank 21148 in the 2025 General category counselling. Ask about a specific department (e.g. 'cutoff for CSE') for exact figures, or check the TNEA portal for the full official list, since cutoffs change by category (OC/BC/MBC/SC/ST) and year."
    ),
    KnowledgeBaseCreate(
        category="Admission",
        question="Is there an entrance exam for MIT?",
        keywords="entrance exam test required MIT admission",
        answer="No separate entrance exam is required for MIT's UG programs — admission is based on TNEA counselling, which uses 12th standard Physics, Chemistry, and Mathematics marks (reduced to 200) as the merit criterion. For PG (M.Tech/M.E.), candidates generally need GATE or TANCET scores."
    ),

    # Required Documents
    KnowledgeBaseCreate(
        category="Required Documents",
        question="What documents are required for admission?",
        keywords="documents required admission certificates needed list",
        answer="Documents commonly required at TNEA admission reporting include: 10th and 12th mark sheets/certificates, Transfer Certificate (TC), Community Certificate (if applicable), Nativity Certificate, Aadhar Card, passport-size photographs, and the TNEA Allotment Order. Bring both originals and photocopies. Check the admission circular on mitindia.edu/hostel.mitindia.edu for the exact current-year checklist, as requirements can be updated each year."
    ),
    KnowledgeBaseCreate(
        category="Required Documents",
        question="Is a community certificate required?",
        keywords="community certificate BC MBC SC ST OC required reservation",
        answer="A community certificate is required for candidates applying under reserved categories (BC, MBC, SC, ST) during TNEA counselling and admission reporting. It must be issued by the competent revenue authority. Confirm exact requirements with the admissions office."
    ),
    KnowledgeBaseCreate(
        category="Required Documents",
        question="What is the Transfer Certificate (TC) procedure at MIT?",
        keywords="transfer certificate TC procedure apply request",
        answer="MIT publishes a TC (Transfer Certificate) procedure document each year on mitindia.edu under Downloads (e.g. 'TC Procedure'). Refer to that PDF, or the Dean Office, for the current process and required forms."
    ),

    # Offices
    KnowledgeBaseCreate(
        category="Offices",
        question="Where is the admission office / TNEA enquiry office?",
        keywords="admission office TNEA enquiry office location where find contact",
        answer="For admission/TNEA queries at MIT Campus, contact the TNEA Enquiry Office: phone 044-22516011 / 044-22516008, email tfc54mitindia@gmail.com. The office is at Anna University, MIT Campus, Chromepet, Chennai-600044."
    ),
    KnowledgeBaseCreate(
        category="Offices",
        question="Where is the Dean's office and what is the contact number?",
        keywords="dean office location contact number email principal head",
        answer="The Dean's Office at MIT Campus can be reached at 044-22516002 / 044-22516003 / 044-22516004, email dean@mitindia.edu. MIT does not have a separate Principal — the campus is headed by a Dean under Anna University."
    ),
    KnowledgeBaseCreate(
        category="Offices",
        question="Who are the Heads of the Departments (HODs) at MIT?",
        keywords="HOD head of department contact list names",
        answer="The current list of Heads of Departments (HODs) at MIT Campus is published on mitindia.edu/hods. Check that page for the department-wise HOD names and contact details, since these can change."
    ),

    # Facilities
    KnowledgeBaseCreate(
        category="Facilities",
        question="What facilities are available at MIT Anna University?",
        keywords="facilities available campus library lab sports computing centre",
        answer="MIT Campus facilities include the Dr. Kalam Computing Centre, Central Library (library.annauniv.edu/mit_index.php), Health Centre, Sports facilities, Hostels (separate boys and girls blocks), a Placement Cell, 32+ student clubs, and several research centres (AU-KBC, Centre for Aerospace Research, Centre for IoT, Siemens Centre of Excellence, Centre for Excellence in Automobile Technology, Centre for Robotics and Automation)."
    ),
    KnowledgeBaseCreate(
        category="Facilities",
        question="Is there a library at MIT?",
        keywords="library books reading room central library annauniv",
        answer="Yes — the MIT Campus Library is part of the Anna University library system, with 95.6K+ books using RFID automation. Details and access info are at library.annauniv.edu/mit_index.php."
    ),
    KnowledgeBaseCreate(
        category="Facilities",
        question="What is the Dr. Kalam Computing Centre?",
        keywords="computing centre KCC computer lab wifi network",
        answer="The Dr. Kalam Computing Centre (KCC) is MIT's central computing facility, handling things like lab/hall bookings, Wi-Fi registration, and IT service requests. Forms (Service Request Form, Hall Booking Form, Wi-Fi Registration) are available on mitindia.edu under Downloads. Site: cc.mitindia.edu."
    ),
    KnowledgeBaseCreate(
        category="Facilities",
        question="Does MIT have student clubs?",
        keywords="student clubs activities extracurricular list",
        answer="Yes, MIT has 32 active student clubs covering technical, cultural, and social areas — including NSS, NSO, YRC, Rotaract Club, Computer Society, MIT Quill, Quiz Club, Tamil Mandram, and more. See clubs.mitindia.edu for the full list."
    ),
    KnowledgeBaseCreate(
        category="Facilities",
        question="How many books does the MIT library have?",
        keywords="library books volumes collection how many journals",
        answer="The MIT Campus library holds around 97,000 volumes of books covering engineering and science topics, subscribes to about 140 journals/publications, and has over 10,000 Standards and 12,000+ bound volumes of magazines. It's part of the Anna University library system — see library.annauniv.edu/mit_index.php."
    ),
    KnowledgeBaseCreate(
        category="Facilities",
        question="What sports facilities and tournaments does MIT have?",
        keywords="sports facilities tournaments volleyball badminton kabaddi gym courts",
        answer="MIT has courts/grounds for volleyball, badminton, kabaddi, and kho-kho, plus a multi-gym facility for students. MIT teams regularly compete in Anna University Zonal, Inter-zone, All India Inter-university, State, National, and other open tournaments."
    ),
    KnowledgeBaseCreate(
        category="Facilities",
        question="Does MIT have a placement cell and who runs it?",
        keywords="placement cell training officer internship recruitment company",
        answer="Yes — MIT's Training and Placement Cell works with the Centre for University-Industry Collaboration (CUIC) to bring companies for final-year student placement interviews, and arranges summer internships (with stipends) for pre-final year students, along with training support. Director, CUIC: Dr. K. Shanmuga Sundaram. Training & Placement Officer: Dr. B. Thanasekhar (also Professor & Head, Computer Centre). See placement.mitindia.edu."
    ),
    KnowledgeBaseCreate(
        category="Facilities",
        question="Does MIT have Wi-Fi and internet facilities?",
        keywords="wifi internet network broadband LAN connectivity",
        answer="Yes, MIT Campus has broadband and Wi-Fi connectivity across campus, with individual login IDs for students, and labs are connected via LAN for fast internet access. Staff Wi-Fi registration is done via a form available on mitindia.edu under Downloads."
    ),
    KnowledgeBaseCreate(
        category="Facilities",
        question="How do I file a grievance or complaint at MIT?",
        keywords="grievance complaint redressal POSH harassment student support",
        answer="MIT has a Student Grievance Redressal mechanism, with a form linked from mitindia.edu, and a POSH (Prevention of Sexual Harassment) committee under Anna University at annauniv.edu/POSH. Check the 'Facilities' section of mitindia.edu for the current grievance form link."
    ),
    KnowledgeBaseCreate(
        category="Facilities",
        question="What forms/downloads are available from the Computing Centre?",
        keywords="downloads forms service request hall booking wifi registration KCC",
        answer="mitindia.edu's Downloads section (under Dr. Kalam Computing Centre) offers: Service Request Form (KCC), Lab/Hall Booking Form (KCC), and Wi-Fi Registration Form for Staff (KCC), along with a link to more forms. Check the Downloads section on the homepage for the current versions."
    ),

    # Hostel
    KnowledgeBaseCreate(
        category="Hostel",
        question="Is hostel facility available at MIT?",
        keywords="hostel accommodation stay residential boys girls",
        answer="Yes. MIT Campus has separate hostel blocks for boys and girls, including an A/C girls' hostel (Rajam Hostel) and general hostel blocks, all located inside the campus. Details: hostel.mitindia.edu."
    ),
    KnowledgeBaseCreate(
        category="Hostel",
        question="How many hostel blocks does MIT have and what are their capacities?",
        keywords="hostel blocks capacity how many boys girls seats",
        answer="MIT has 7 boys hostel blocks (accommodating around 1000 boys) and 4 girls hostel blocks (accommodating around 800 girls), spread across the Main and Annex campuses. There are 4 mess blocks where about 1200 students can dine at once."
    ),
    KnowledgeBaseCreate(
        category="Hostel",
        question="What are the names of MIT's hostel blocks?",
        keywords="hostel block names Rajam Birla Thamirabarani Kurinji list",
        answer="MIT's hostel blocks are largely named after Tamil rivers — including Thamirabarani, Amaravathy, Bhavani, Vaigai, Cauvery, and Ponni. The Rajam block is named after founder Mr. C. Rajam, and the Birla block after philanthropist Mr. Birla. Other blocks (Kurinji, Marutham) are named after Tamil land classifications. The boys' international hostel is called Orchid."
    ),
    KnowledgeBaseCreate(
        category="Hostel",
        question="What facilities does the boys hostel have?",
        keywords="boys hostel facilities amenities room CCTV wifi gym library",
        answer="MIT boys hostel facilities include: furnished shared rooms, CCTV in all blocks, wired/wireless internet in rooms, mosquito netting, first-aid boxes, LED TVs, RO drinking water and hot water dispensers, electric water heaters, water coolers, fire extinguishers, 24x7 power backup, reading rooms and common TV halls, a fitness centre/gym, indoor games, veg and non-veg meals, a library at Annex Boys Hostel plus a PDA library at MIT Campus, a volleyball court, a shuttle court at Annex Hostels, an Open Air Theatre, common laundry, and green surroundings."
    ),
    KnowledgeBaseCreate(
        category="Hostel",
        question="Is there an A/C hostel for girls at MIT?",
        keywords="AC hostel girls Rajam air conditioned facility",
        answer="Yes — the Rajam Hostel is MIT's air-conditioned girls' hostel. Details and facilities are listed at hostel.mitindia.edu/rajam-hostel-ac.html."
    ),
    KnowledgeBaseCreate(
        category="Hostel",
        question="Is there an international/NRI hostel at MIT?",
        keywords="international NRI hostel orchid foreign students",
        answer="Yes — MIT has separate accommodation for NRI/international students, including the Orchid International boys' hostel, alongside general hostel facilities for General Boys and General Girls students."
    ),
    KnowledgeBaseCreate(
        category="Hostel",
        question="What is the hostel fee and how do I pay it?",
        keywords="hostel fee cost charges accommodation price payment",
        answer=f"MIT publishes a UG/PG/PhD first-year hostel fee structure circular each year on hostel.mitindia.edu (look under 'Circular'). Payment is made online via the Hostel Payment Desk on the same site. {VERIFY_NOTE}"
    ),
    KnowledgeBaseCreate(
        category="Hostel",
        question="How do I contact the MIT hostel office?",
        keywords="hostel office contact number email address warden",
        answer="MIT Hostel Office: phone 044-22516118 / 6119 / 6120, email mithostels@mitindia.edu. Address: Madras Institute of Technology (Campus), MIT Road, Radha Nagar, Chromepet, Chennai-600044, Tamil Nadu. New hostel registration and student login are at mithostels.metadash.in."
    ),
    KnowledgeBaseCreate(
        category="Hostel",
        question="What is the mess/canteen facility like in the hostel?",
        keywords="mess food canteen dining hostel meals",
        answer="MIT hostels have a mess facility with a dedicated dining hall serving meals to residents, plus mess seating and kitchen details published on hostel.mitindia.edu under 'Mess Facility'. There is also a separate campus canteen — see hostel.mitindia.edu/canteen-mit.html."
    ),
    KnowledgeBaseCreate(
        category="Hostel",
        question="What are the hostel rules and ragging policy?",
        keywords="hostel rules regulations ragging policy discipline complaint",
        answer="Ragging is strictly prohibited in MIT hostels. Any incident should be reported immediately to the hostel authorities or dropped in the complaint box provided for this purpose. Full hostel rules and regulations are published at hostel.mitindia.edu/rules-regulations-mit.html."
    ),

    # Transport
    KnowledgeBaseCreate(
        category="Transport",
        question="How to reach MIT Anna University?",
        keywords="how to reach location address directions route map chromepet",
        answer="MIT Campus is located at Chromepet, Chennai - 600044, Tamil Nadu. It's easily reached via the Chromepet suburban railway station and local/MTC buses on the GST Road corridor. Address for reference: Anna University, MIT Campus, Chromepet, Chennai-600044."
    ),

    # Fees
    KnowledgeBaseCreate(
        category="Fees",
        question="What is the tuition fee at MIT Anna University?",
        keywords="tuition fee cost charges semester annual academic first generation graduate",
        answer=f"Tuition fees at MIT vary per student — they depend on department, reservation category, and factors like First Generation Graduate (FGG) status, which can bring additional fee concessions. {VERIFY_NOTE} The TNEA admission portal (auegov.ac.in) and annauniv.edu publish the official current fee structure, and the admissions/accounts office can confirm your individual applicable fee."
    ),
    KnowledgeBaseCreate(
        category="Fees",
        question="Are scholarships available at MIT?",
        keywords="scholarship financial aid eligibility apply",
        answer="Yes, MIT publishes scholarship eligibility criteria and an application process on mitindia.edu/scholarships, with a separate eligibility-criteria PDF also available there. Check that page for current-year schemes and how to apply."
    ),

    # Contact
    KnowledgeBaseCreate(
        category="Contact",
        question="What is the contact number and address of MIT Anna University?",
        keywords="contact phone number telephone call helpline address",
        answer="Anna University, MIT Campus, Chromepet, Chennai-600044, Tamil Nadu, India. Dean Office: 044-22516002 / 03 / 04 (dean@mitindia.edu). TNEA Enquiry Office: 044-22516011 / 6008 (tfc54mitindia@gmail.com). Hostel Office: 044-22516118 / 6119 / 6120 (mithostels@mitindia.edu)."
    ),
    KnowledgeBaseCreate(
        category="Contact",
        question="What is MIT's official website?",
        keywords="website official site url link online",
        answer="MIT Campus's official website is mitindia.edu. The hostel section has its own site at hostel.mitindia.edu, and department-specific pages are at departments.auegov.ac.in."
    ),

    # General
    KnowledgeBaseCreate(
        category="General",
        question="What is MIT Anna University?",
        keywords="about MIT history established college overview what is",
        answer="Madras Institute of Technology (MIT) is a constituent campus of Anna University, Chennai, founded in July 1949 by Shri C. Rajam with a donation from the sale of his house. It was the first institute in India to offer specialized UG programs in Aeronautical Engineering, Automobile Engineering, Electronics Engineering, and Instrumentation Technology. MIT merged into Anna University in 1978 and is located in Chromepet, Chennai."
    ),
    KnowledgeBaseCreate(
        category="General",
        question="When was MIT Anna University established?",
        keywords="established founded year history 1949 date",
        answer="MIT was established in July 1949 by Shri C. Rajam, and became a constituent college of Anna University when it merged with the university in 1978."
    ),
    KnowledgeBaseCreate(
        category="General",
        question="What is MIT's ranking?",
        keywords="ranking rank NIRF QS accreditation NAAC NBA",
        answer="As of the 2025-26 cycle, MIT Campus holds NIRF Rank 20 (2025) and QS Rank 465 (2026), and is accredited by both NBA and NAAC. Rankings are updated yearly, so check mitindia.edu for the latest figures."
    ),
    KnowledgeBaseCreate(
        category="General",
        question="How many students study at MIT?",
        keywords="students strength number UG PG PhD scholars faculty",
        answer="MIT Campus currently has around 3,600 undergraduate students, 284 postgraduate students, and 306 PhD scholars, supported by roughly 210 faculty and 124 staff members. These numbers change each academic year."
    ),
]


def run_seed(db: Session):
    from app.database.models import KnowledgeBaseEntry
    existing = db.query(KnowledgeBaseEntry).count()
    if existing > 0:
        print(f"Database already has {existing} entries. Skipping seed.")
        return

    for entry_data in SEED_ENTRIES:
        create(db, entry_data)

    create_admin_user(db, username="admin", password="admin123", role="admin")
    print(f"Seeded {len(SEED_ENTRIES)} knowledge base entries and default admin user.")
    print("WARNING: Change the default admin password immediately in production!")
