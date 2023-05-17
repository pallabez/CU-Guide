<template>
    <v-row>
        <v-col v-for="website in websites" :key="website.title" cols="12" md="6">
            <website-card :website="website"/>
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
                description: '',
                link: '',
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
                description: '',
                link: '',
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
                description: '',
                link: '',
                subpoints: [
                    'Online Examination Portal',
                ],
            },
        ]
    })
}
</script>