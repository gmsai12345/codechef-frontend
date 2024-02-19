"use client"
import AppointmentForm from "@/components/AppointmentForm";
import { useSearchParams } from 'next/navigation'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

  
function AppointmentPage() {
    const searchParams = useSearchParams()
    const service = searchParams.get('service')
    const serviceOptions = [
        { value: 'cardiologist', label: 'Cardiologist' },
        { value: 'dentist', label: 'Dentist' },
        { value: 'dermatologist', label: 'Dermatologist' },
        { value: 'endocrinologist', label: 'Endocrinologist' },
        { value: 'gastroenterologist', label: 'Gastroenterologist' },
        { value: 'gynecologist', label: 'Gynecologist' },
        { value: 'hematologist', label: 'Hematologist' },
        { value: 'infectiousdisease', label: 'Infectious Disease Specialist' },
        { value: 'internist', label: 'Internist' },
        { value: 'nephrologist', label: 'Nephrologist' },
        { value: 'neurologist', label: 'Neurologist' },
        { value: 'obstetrician', label: 'Obstetrician' },
        { value: 'oncologist', label: 'Oncologist' },
        { value: 'ophthalmologist', label: 'Ophthalmologist' },
        { value: 'orthopedist', label: 'Orthopedist' },
        { value: 'otolaryngologist', label: 'Otolaryngologist' },
        { value: 'pathologist', label: 'Pathologist' },
        { value: 'pediatrician', label: 'Pediatrician' },
        { value: 'physiatrist', label: 'Physiatrist' },
        { value: 'plasticsurgeon', label: 'Plastic Surgeon' },
        { value: 'podiatrist', label: 'Podiatrist' },
        { value: 'psychiatrist', label: 'Psychiatrist' },
        { value: 'pulmonologist', label: 'Pulmonologist' },
        { value: 'radiologist', label: 'Radiologist' },
        { value: 'rheumatologist', label: 'Rheumatologist' },
        { value: 'urologist', label: 'Urologist' },
        { value: 'veterinarian', label: 'Veterinarian' },
        { value: 'allergist', label: 'Allergist' },
    ]

    return (
        <div className="container flex justify-center">
            <Elements stripe={stripePromise}>
                <AppointmentForm service={service} servicesOptions={serviceOptions} />
            </Elements>
        </div>
    )
}

export default AppointmentPage;