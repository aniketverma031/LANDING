# Django University Landing Pages - Setup Instructions

## Installation

### 1. Clone or Extract the Project
\`\`\`bash
cd university-landing-django
\`\`\`

### 2. Create Virtual Environment
\`\`\`bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
\`\`\`

### 3. Install Dependencies
\`\`\`bash
pip install -r requirements.txt
\`\`\`

### 4. Database Setup
\`\`\`bash
python manage.py migrate
\`\`\`

### 5. Create Superuser (Admin Account)
\`\`\`bash
python manage.py createsuperuser
# Follow the prompts to create your admin account
\`\`\`

### 6. Create Sample Data
You can add sample universities and courses via the Django admin panel:

**Step 1:** Run the server
\`\`\`bash
python manage.py runserver
\`\`\`

**Step 2:** Go to http://localhost:8000/admin

**Step 3:** Login with your superuser credentials

**Step 4:** Create universities:
- Click "Universities" → "Add University"
- Fill in: Name, Slug, Description, Hero Title, Hero Subtitle, About Text, Placements Percentage

**Step 5:** Add courses for each university:
- Click "Courses" → "Add Course"
- Select the university and fill in course details

**Step 6:** Add campus facilities:
- Click "Campus Facilities" → "Add Campus"
- Select university and add facility information

## Sample Data to Add

### University A: Elite Institute of Technology
- Name: Elite Institute of Technology
- Slug: elite-institute-tech
- Hero Title: World-Class Technology Education
- Description: Leading technology institute with placement excellence
- About Text: Elite Institute of Technology is a premier institution committed to providing world-class education in technology and innovation.
- Placements: 95%

**Courses:**
- B.Tech: ₹5,00,000
- MBA: ₹15,00,000
- M.Tech: ₹4,00,000

**Facilities:**
- State-of-the-Art Labs
- Modern Hostel Facilities
- Excellent Library

### University B: Horizon Global University
- Name: Horizon Global University
- Slug: horizon-global
- Hero Title: Education for a Global Future
- Description: Leading liberal arts and global university
- About Text: Horizon Global University prepares students to make a difference in a complex world.
- Placements: 92%

**Courses:**
- BBA: ₹3,00,000
- M.A: ₹2,50,000
- B.Sc: ₹2,75,000

**Facilities:**
- Sports Complex
- International Student Center
- Career Development Center

## Running the Application

\`\`\`bash
python manage.py runserver
\`\`\`

Visit:
- Home Page: http://localhost:8000/
- Admin Panel: http://localhost:8000/admin/

## API Endpoints

- \`GET /api/basic/\` - Test endpoint
- \`GET /api/fees/?university=elite-institute-tech\` - Get fees for a university
- \`POST /api/submit-lead/\` - Submit lead form

## Pipedream Webhook Integration

1. Create a Pipedream account at https://pipedream.com
2. Create a new workflow and get your webhook URL
3. Set environment variable:
   \`\`\`bash
   export PIPEDREAM_WEBHOOK_URL="your-webhook-url-here"
   \`\`\`

Or add to your \`.env\` file and use \`python-dotenv\`:
\`\`\`
PIPEDREAM_WEBHOOK_URL=your-webhook-url-here
\`\`\`

4. Uncomment the Pipedream code in \`universities/views.py\` if not already uncommented

## Project Structure

\`\`\`
university-landing-django/
├── manage.py
├── requirements.txt
├── SETUP_INSTRUCTIONS.md
├── db.sqlite3
├── university_landing/
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── universities/
│   ├── migrations/
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   ├── forms.py
│   ├── admin.py
│   └── templates/
│       └── universities/
│           ├── index.html
│           └── university_detail.html
├── templates/
│   └── base.html
└── static/
    └── style.css
\`\`\`

## Features

✅ Two university landing pages
✅ Lead capture forms with validation
✅ Dynamic fees display
✅ Admin panel for managing universities, courses, and leads
✅ API endpoints for fees and lead submission
✅ Pipedream webhook integration
✅ Responsive design with Tailwind CSS
✅ Phone number validation (10 digits)
✅ Email validation
✅ Database storage for all leads

## Deployment

### Deploy to Heroku

1. Add \`Procfile\`:
\`\`\`
web: gunicorn university_landing.wsgi
\`\`\`

2. Update \`settings.py\`:
\`\`\`python
ALLOWED_HOSTS = ['your-app-name.herokuapp.com']
\`\`\`

3. Push to Heroku:
\`\`\`bash
git push heroku main
\`\`\`

### Deploy to PythonAnywhere

1. Upload your project files
2. Create a new web app
3. Configure virtual environment
4. Set up static files
5. Reload the web app

## Troubleshooting

### Database Error
\`\`\`bash
python manage.py migrate --run-syncdb
\`\`\`

### Missing Static Files
\`\`\`bash
python manage.py collectstatic
\`\`\`

### Port Already in Use
\`\`\`bash
python manage.py runserver 8001
\`\`\`

## Support

For issues or questions, refer to Django documentation:
- https://docs.djangoproject.com/
