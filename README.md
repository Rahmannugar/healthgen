# HealthGen - Modern Healthcare Booking Platform

![HealthGen]

HealthGen is a responsive and accessible doctor appointment booking platform designed to streamline the healthcare booking experience. This application allows users to browse doctors by specialty, book appointments, and manage their healthcare schedule in one place.

## 🌟 Features

### User Authentication
- Simple login system (username: `admin`, password: `admin`)
- User profile management
- Secure session handling with localStorage

### Doctor Directory
- Comprehensive doctor listings with detailed profiles
- Filter doctors by specialty and availability
- Responsive doctor cards with key information (name, specialty, rating, location)
- Visual indicators for doctor availability

### Appointment Booking
- Interactive booking modal
- Available time slot selection
- Appointment confirmation system
- Real-time availability updates

### Appointment Management
- View all booked appointments
- Appointment status tracking
- Organized presentation of appointment details
- Date and time information

### UI/UX
- Initial loading animation
- Responsive design for mobile, tablet, and desktop
- Profile dropdown with user options
- Notification system
- Clean, medical-themed interface

## 🛠️ Technologies Used

- **Frontend Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Authentication**: Custom localStorage implementation
- **Accessibility**: ARIA attributes, keyboard navigation, screen reader support

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn

## 🚀 Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/rahmannugar/healthgen.git
   cd healthgen
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🔍 Usage Guide

### Authentication
1. Access the application at [http://localhost:3000](http://localhost:3000)
2. Use the following credentials to log in:
   - Username: `admin`
   - Password: `admin`

### Finding Doctors
1. Navigate to the "Find Doctors" tab
2. Use the filters to narrow down by specialty or availability
3. Browse through the doctor cards to find a suitable healthcare provider

### Booking an Appointment
1. Click the "Book Appointment" button on a doctor's card
2. Select an available time slot from the booking modal
3. Click "Confirm Appointment" to schedule your visit

### Managing Appointments
1. Navigate to the "My Appointments" tab
2. View all your booked appointments
3. Check appointment details including doctor, specialty, date, time, and location


## ♿ Accessibility Considerations

HealthGen is built with accessibility as a priority:

- **Semantic HTML**: Proper use of headings, landmarks, and semantic elements
- **ARIA Attributes**: Appropriate use of aria-label, aria-describedby, and other ARIA attributes
- **Keyboard Navigation**: All interactive elements are accessible via keyboard
- **Focus Management**: Proper focus handling, especially in the modal dialogs
- **Screen Reader Support**: Text alternatives for non-text content
- **Color Contrast**: Sufficient contrast ratios for text and interactive elements
- **Responsive Design**: Adapts to different screen sizes and devices
- **Form Accessibility**: Clear labels and error messages

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [shadcn/ui](https://ui.shadcn.com/) for accessible UI components
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Vercel](https://vercel.com/) for hosting and deployment

---

Built with ❤️ for InVitro Capital by [Your Name]
