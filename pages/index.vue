<template>
    <v-row>
        <v-col v-for="website in websites" :key="website.title" cols="12" md="6">
            <website-card :website="website" />
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        websites: [
            {
                title: 'CUIMS',
                image: '/images/CUIMS.png',
                description: 'Central Portal for CU student',
                link: 'https://uims.cuchd.in/uims/',
                subpoints: [
                    'Attendence History',
                    'Time Table',
                    'Syllabus',
                    'Leave Application',
                    'Document Upload',
                    'Exam Result & Dates',
                    'General proficiency',
                    'Library',
                    'MOOQ Registration',
                ],
            },
            {
                title: 'CUCET',
                image: '/images/CUCET.png',
                description: 'External CU website to get details about the university',
                link: 'https://cucet.cuchd.in/',
                subpoints: [
                    'Apply to Chandigarh University',
                    'Get blackboard & CUIMS login and password',
                    'Financial AID',
                    'CUCET exam',
                    'Bootcamp result and certificate',
                ],
            },
            {
                title: 'SHL',
                image: '/images/SHL.png',
                description: 'Online examination portal',
                link: 'https://amcatglobal.aspiringminds.com/',
                subpoints: [
                    'Online Examination Portal',
                    'Credentials can be found in official outlook account, few days before exam'
                ],
            },
            {
                title: 'LMS',
                image: '/images/LMS.png',
                description: 'Course Portal',
                link: 'https://lms.cuchd.in/',
                subpoints: [
                    'Course PPT & Doc',
                    'Course Quiz (Graded)',
                    'Course Worksheet',
                ],
            },
            {
                title: 'NPTEL',
                image: '/images/NPTEL.png',
                description: 'Online Courses',
                link: 'https://swayam.gov.in/nc_details/NPTEL',
                subpoints: [
                    'Courses from IIT / NIT',
                    'Different Courses for any Branch of Engineering',
                    'MOOCs Courses',
                    'Valid Certification Among Universities',
                    'Weekly Solutions',
                    'Assignments',
                ],
            },
            {
                title: 'Coursera',
                image: '/images/COURSERA.png',
                description: 'Online learning platform',
                link: 'https://www.coursera.org/',
                subpoints: [
                    'Various Courses',
                    'Specializations',
                    'Certification of Top Colleges',
                    'Top Company Courses',
                    'Projects',
                    'MOOCS courses',
                ],
            },
            {
                title: 'CodeChef',
                image: '/images/CodeChef.png',
                description: 'Practical Coding for Everyone',
                link: 'https://www.codechef.com/',
                subpoints: [
                    'Coding Practice',
                    'Different Programming Languages',
                    'Ranking among Others',
                    'Interview Questions',
                    'Programming Solutions',
                    'Profile',
                ],
            },
            {
                title: 'Devfolio',
                image: '/images/DEVFOLIO.png',
                description: 'Hackathons website',
                link: 'https://devfolio.co/hackathons',
                subpoints: [
                    'HACKATHON Updates',
                    'Registration',
                    'Hackathon pass',
                    'Team Making',
                    'Different Fields',
                    'Ranking',
                ],
            },
        ]
    })
}
</script>