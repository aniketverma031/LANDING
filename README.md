🎓 University Landing Pages – Django Project

This project contains two fully responsive single-page landing pages for private universities, each with:

Dynamic university details

Course listings

Placement stats

Facilities

Lead generation form (with validation)

Fee modal with dynamic data

API integration with Pipedream workflow

Simple & nested JSON APIs

Fully responsive (mobile + desktop)

Built using Django, TailwindCSS, and SQLite.

🚀 Features
✔ Two University Landing Pages

Each page includes:

University overview

Courses offered

Fees

Placements

Facilities

Apply Now / Download Brochure CTAs

✔ Lead Form (With Validation)

Fields:

Name

Email

10-digit Phone

State

Course Interested

Intake Year

Consent Checkbox

On submit:

Saves lead in database

Sends lead to Pipedream webhook

Displays success message without page refresh

✔ Dynamic Fee Modal

“Check Course-wise Fees” button opens a modal that fetches data from:
/api/fees?university=<slug>

✔ Working APIs
Basic API
GET /api/basic
{
  "status": "success"
}

Nested JSON Fees API
GET /api/fees?university=<slug>
{
  "courses": [
    { "name": "MBA", "fee": 350000 }
  ]
}

Lead Submission API (POST)

Saves lead + sends to Pipedream.

🏗 Tech Stack

Backend: Django 5

Frontend: TailwindCSS, Alpine.js

Database: SQLite

API Pipeline: Pipedream Webhook

Hosting: Any free SSL platform (Render/PythonAnywhere/Railway)

📂 Project Structure
LANDING-PAGE-DJANGO/
│
├── universities/
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   ├── templates/universities/
│   │   ├── index.html
│   │   ├── university_detail.html
│   └── migrations/
│
├── static/
├── templates/
├── manage.py
└── requirements.txt

⚙️ Setup Instructions
1. Clone repo
git clone https://github.com/aniketverma031/LANDING.git
cd LANDING

2. Create virtual environment
python -m venv env
env\Scripts\activate      # Windows
source env/bin/activate   # Mac/Linux

3. Install dependencies
pip install -r requirements.txt

4. Apply migrations
python manage.py migrate

5. Run server
python manage.py runserver


Open:
http://127.0.0.1:8000/

🔗 Pipedream Webhook Setup

Create a workflow at https://pipedream.com

Copy webhook URL

Add environment variable:

Windows:

set PIPEDREAM_WEBHOOK_URL=<your-url>


macOS/Linux:

export PIPEDREAM_WEBHOOK_URL=<your-url>



🎓 Sample Universities Included

Sunrise Private University

Horizon International University

Both include:

Courses

Facility details

Fee structure

Placement stats
