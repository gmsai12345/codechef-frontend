"use client"
import { List, Space } from 'antd';
import React, { FC } from 'react'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

interface DockerListProps {

}

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const DockerList: FC<DockerListProps> = ({ }) => {
    const router = useRouter();
  const data=  [
      {
          "firstName": "Aarav",
          "lastName": "Sharma",
          "specialty": "Cardiology",
          "hospital": "AIIMS",
          "city": "New Delhi",
          "state": "DL",
          "education": "All India Institute of Medical Sciences",
          "yearsOfExperience": 12,
          "bio": "Dr. Sharma is a distinguished cardiologist specializing in interventional cardiology and preventive care. He is dedicated to improving heart health through patient education and innovative treatments.",
          "image": "https://t3.ftcdn.net/jpg/03/00/22/02/360_F_300220248_VKEd3QKx31kzqHcwZfnGmWKZLYTjf8R0.jpg"
      },
      {
          "firstName": "Riya",
          "lastName": "Patel",
          "specialty": "Dermatology",
          "hospital": "Apollo Hospital",
          "city": "Mumbai",
          "state": "MH",
          "education": "Grant Medical College",
          "yearsOfExperience": 10,
          "bio": "Dr. Patel is a board-certified dermatologist focusing on both medical and cosmetic dermatology. She aims to provide personalized care for all skin conditions.",
          "image": "https://img.freepik.com/premium-photo/indian-female-doctor-indian-nurse_714173-201.jpg"
      },
      {
          "firstName": "Arjun",
          "lastName": "Reddy",
          "specialty": "Neurology",
          "hospital": "NIMHANS",
          "city": "Bangalore",
          "state": "KA",
          "education": "National Institute of Mental Health and Neurosciences",
          "yearsOfExperience": 15,
          "bio": "Dr. Reddy is a renowned neurologist specializing in stroke care and neurodegenerative diseases. He is committed to advancing neurological research and treatment.",
          "image": "https://c8.alamy.com/comp/2GGD2HG/vertical-portrait-of-male-happy-indian-doctor-standing-in-clinic-hospital-2GGD2HG.jpg"
      },
      {
          "firstName": "Priya",
          "lastName": "Singh",
          "specialty": "Pediatrics",
          "hospital": "Fortis Hospital",
          "city": "Gurgaon",
          "state": "HR",
          "education": "Maulana Azad Medical College",
          "yearsOfExperience": 8,
          "bio": "Dr. Singh is a caring pediatrician who enjoys building strong relationships with children and their families. She focuses on providing comprehensive healthcare from infancy through adolescence.",
          "image": "https://media.istockphoto.com/id/153867295/photo/smiling-indian-doctor-woman.jpg?s=612x612&w=0&k=20&c=8jOM4wQg1zJVz5iJ6TfpVl2HnZdSFfXw9UVXJ7WhOYw="
      },
      {
          "firstName": "Karan",
          "lastName": "Kapoor",
          "specialty": "Psychiatry",
          "hospital": "Manipal Hospital",
          "city": "Bangalore",
          "state": "KA",
          "education": "Bangalore Medical College",
          "yearsOfExperience": 18,
          "bio": "Dr. Kapoor is a compassionate psychiatrist specializing in adult and geriatric mental health. He is dedicated to providing evidence-based treatment and fostering therapeutic relationships.",
          "image": "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg="
      },
      {
          "firstName": "Ananya",
          "lastName": "Iyer",
          "specialty": "Rheumatology",
          "hospital": "Kokilaben Dhirubhai Ambani Hospital",
          "city": "Mumbai",
          "state": "MH",
          "education": "Seth GS Medical College",
          "yearsOfExperience": 14,
          "bio": "Dr. Iyer is an experienced rheumatologist with expertise in treating inflammatory conditions like arthritis and autoimmune diseases. She emphasizes patient education and self-management.",
          "image": "https://img.freepik.com/premium-photo/indian-female-doctor-indian-nurse_714173-202.jpg"
      },
      {
          "firstName": "Rajesh",
          "lastName": "Menon",
          "specialty": "Oncology",
          "hospital": "Tata Memorial Hospital",
          "city": "Mumbai",
          "state": "MH",
          "education": "Tata Memorial Centre",
          "yearsOfExperience": 20,
          "bio": "Dr. Menon is a leading oncologist with extensive experience in cancer treatment. He is committed to providing compassionate care and innovative treatment options for his patients.",
          "image": "https://media.gettyimages.com/id/72991363/photo/male-doctor-smiling-portrait-close-up.jpg?s=612x612&w=gi&k=20&c=Xe73L_SnBMPsPiSpUFkOaU0uW_c3t1ktIM8ZWWPihgA="
      },
      {
          "firstName": "Swati",
          "lastName": "Deshmukh",
          "specialty": "Pulmonology",
          "hospital": "Breach Candy Hospital",
          "city": "Mumbai",
          "state": "MH",
          "education": "Topiwala National Medical College",
          "yearsOfExperience": 16,
          "bio": "Dr. Deshmukh is a pulmonologist with a focus on respiratory diseases. She is passionate about patient education and the latest advancements in pulmonology.",
          "image": "https://t3.ftcdn.net/jpg/01/14/89/28/360_F_114892812_Va0KWhvmSUOoYNEoHCAOJ8uYXzBiD8vY.jpg"
      },
      {
          "firstName": "Vikram",
          "lastName": "Agarwal",
          "specialty": "Orthopedics",
          "hospital": "Medanta - The Medicity",
          "city": "Gurgaon",
          "state": "HR",
          "education": "King George's Medical University",
          "yearsOfExperience": 22,
          "bio": "Dr. Agarwal is an orthopedic surgeon specializing in joint replacement and sports injuries. He is known for his precision and patient-centered approach.",
          "image": "https://media.istockphoto.com/id/1212177444/photo/happy-male-doctor-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=q5Hv1bcmMOiocprvNxpQgtqcbNcPltBnhZILdUE8BjQ="
      },
      {
          "firstName": "Nisha",
          "lastName": "Verma",
          "specialty": "Gynecology",
          "hospital": "Sir Ganga Ram Hospital",
          "city": "New Delhi",
          "state": "DL",
          "education": "Lady Hardinge Medical College",
          "yearsOfExperience": 19,
          "bio": "Dr. Verma is a gynecologist with a focus on women's health and wellness. She provides comprehensive care for reproductive health issues.",
          "image": "https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg"
      },
      {
          "firstName": "Sameer",
          "lastName": "Khan",
          "specialty": "Endocrinology",
          "hospital": "Max Super Speciality Hospital",
          "city": "New Delhi",
          "state": "DL",
          "education": "Jawaharlal Nehru Medical College",
          "yearsOfExperience": 13,
          "bio": "Dr. Khan is an endocrinologist specializing in diabetes and metabolic disorders. He is dedicated to improving patient outcomes through personalized treatment plans.",
          "image": "https://static.vecteezy.com/system/resources/previews/028/287/384/large_2x/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg"
      },
      {
          "firstName": "Meera",
          "lastName": "Nair",
          "specialty": "Gastroenterology",
          "hospital": "Aster Medcity",
          "city": "Kochi",
          "state": "KL",
          "education": "Amrita Institute of Medical Sciences",
          "yearsOfExperience": 17,
          "bio": "Dr. Nair is a gastroenterologist with a focus on digestive system diseases. She is passionate about patient care and the latest research in gastroenterology.",
          "image": "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"
      },
      {
          "firstName": "Rohan",
          "lastName": "Jain",
          "specialty": "Nephrology",
          "hospital": "Manipal Hospital",
          "city": "Bangalore",
          "state": "KA",
          "education": "St. John's Medical College",
          "yearsOfExperience": 21,
          "bio": "Dr. Jain is a nephrologist specializing in kidney care and dialysis. He is known for his compassionate approach and commitment to patient education.",
          "image": "https://media.istockphoto.com/id/1167770939/photo/young-indian-doctor-man-standing-over-isolated-yellow-background-happy-face-smiling-with.jpg?s=612x612&w=0&k=20&c=4hjCDwvljD65iFN2Qc40jOfnAVRNSUrRhmiiYCxPYUw="
      },
      {
          "firstName": "Sneha",
          "lastName": "Gupta",
          "specialty": "Ophthalmology",
          "hospital": "LV Prasad Eye Institute",
          "city": "Hyderabad",
          "state": "TG",
          "education": "All India Institute of Medical Sciences",
          "yearsOfExperience": 15,
          "bio": "Dr. Gupta is an ophthalmologist with expertise in cataract and refractive surgery. She is committed to providing high-quality eye care to her patients.",
          "image": "https://media.istockphoto.com/id/1293373291/photo/portrait-of-confident-ethnic-female-doctor.jpg?s=612x612&w=0&k=20&c=CJsw6IgTecJZoBeVXqZdvh2BI-NyVa-8VcQM3fPhbYc="
      },
      {
          "firstName": "Aditya",
          "lastName": "Rao",
          "specialty": "Urology",
          "hospital": "Global Hospital",
          "city": "Chennai",
          "state": "TN",
          "education": "Christian Medical College",
          "yearsOfExperience": 18,
          "bio": "Dr. Rao is a urologist specializing in minimally invasive surgery and prostate health. He is dedicated to advancing urological care through research and innovation.",
          "image": "https://img.freepik.com/premium-photo/handsome-indian-doctor-care-male-confident-generate-ai_98402-88958.jpg"
      }
  ];  
    return (
        <div className='container mx-auto'>

            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 10,
                }}
                dataSource={data}
                // footer={
                //     <div>
                //         <b>ant design</b> footer part
                //     </div>
                // }
                renderItem={(item) => (
                    <List.Item
                        key={item.firstName}
                       
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src={item.image}
                            />
                        }
                        className='hover:scale-105 transition duration-300 ease-in-out transform hover:shadow-md hover:bg-gray-100 p-5 rounded-lg my-5 mx-5 bg-white shadow-sm active:bg-gray-200 cursor-pointer'
                        onClick={() => router.push(`/hospitals`)}
                    >
                        <List.Item.Meta
                            title={<a href={item.firstName}>{item.specialty}</a>}
                            description={item.education}
                        />
                        {item.bio}
                    </List.Item>
                )}
            />

        </div>
    )
}

export default DockerList