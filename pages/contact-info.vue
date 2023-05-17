<template>
    <section id="contact-info">
        <h1>Contact Information</h1>
        <table border="0">
          <tr>
            <th>Issues</th>
            <th>Email</th>
            <th>Contact Number</th>
          </tr>
          <tr v-for="contact in contacts">
            <td>{{ contact.description }}</td>
            <td class="email"> {{contact.email }}</td>
            <td>{{contact.phone }}</td>
          </tr>
        </table>
      </section>
</template>

<script>
export default {
    data: () => ({
        contacts: [
            {
                description: 'Account Related',
                email: 'cfo@cumail.in',
                phone: '8146651566',
            },
            {
                description: 'Scholarships',
                email: 'scholarships@cumail.in',
                phone: '8146651668',
            },
            {
                description: 'Loan Issues',
                email: 'Balwant.singh@cumail.in',
                phone: '7087000654',
            },
            {
                description: 'Correction in Information',
                email: 'Pooja.e8058@cumail.in',
                phone: '8288927666',
            },
            {
                description: 'Document Pendency',
                email: 'Ar.registration@cumail.in',
                phone: '8146651626',
            },
            {
                description: 'Blackboard related',
                email: 'Blackboard.support@cumail.in',
                phone: '9876888040',
            },
            {
                description: 'Examination',
                email: 'Query.exam@cumail.in',
                phone: '9876024098',
            },
            {
                description: 'Domestic Admission',
                email: 'admission@cumail.in',
                phone: '7837008302',
            },
            {
                description: 'Bonafide Certificate',
                email: 'info@cumail.in',
                phone: '8146651668',
            },
            {
                description: 'Hostel Query',
                email: 'hostelcare@cumail.in',
                phone: '7087003840',
            },
            // Spam here
            {
                description: 'Document Pendency',
                email: 'Ar.registration@cumail.in',
                phone: '8146651626',
            },
            {
                description: 'Blackboard related',
                email: 'Blackboard.support@cumail.in',
                phone: '9876888040',
            },
            {
                description: 'Examination',
                email: 'Query.exam@cumail.in',
                phone: '9876024098',
            },
            {
                description: 'Loan Issues',
                email: 'Balwant.singh@cumail.in',
                phone: '7087000654',
            },
            {
                description: 'Correction in Information',
                email: 'Pooja.e8058@cumail.in',
                phone: '8288927666',
            },
            {
                description: 'Document Pendency',
                email: 'Ar.registration@cumail.in',
                phone: '8146651626',
            },
        ]
    })
}
</script>

<style scoped>
#contact-info table {
    table-layout: auto;
    width: 100%;
}

#contact-info table th {
    font-weight: bold;
    background-color: var(--shadow);
}

#contact-info table tr:nth-child(2n + 1) {
    background-color: rgb(238, 224, 224);
}

</style>