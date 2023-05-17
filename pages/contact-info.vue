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
                <td class="email"> {{ contact.email }}</td>
                <td>{{ contact.phone }}</td>
            </tr>
        </table>
    </section>

    <section id="contact-us">
        <h1>Contact Us</h1>
        <div class="content">
            <form class="form">
                <input type="text" name="sendMsg-name" placeholder="Your Name" required />
                <input type="email" name="sendMsg-email" placeholder="Your Email" required />
                <textarea name="sendMsg-message" id="contact-msg" placeholder="Message" required></textarea>
                <button type="submit">Submit</button>
            </form>

            <div class="information">
                <h2>Get in touch</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.
                </p>

                <h2>Address</h2>
                <div>
                    <v-icon color="black"> mdi-map-marker </v-icon>
                    Punjab, Mohali
                </div>
                <div>
                    <v-icon color="black"> mdi-phone </v-icon>
                    999999999
                </div>
                <div>
                    <v-icon color="black"> mdi-email </v-icon>
                    backbenchers101@gmail.com
                </div>
            </div>
        </div>
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

#contact-us {
    margin-top: 100px;
    border-radius: 5px;
}

#contact-us .content .form {
    float: left;
    width: 50%;

}

#contact-us .content .form input, #contact-us .content .form textarea{
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

#contact-us .content .form button {
    background-color: var(--primary-color);
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-left: 20px;
}

#contact-us .content .information {
    float: left;
    width: 50%;
    margin-top: 6px;
    padding: 0 10px;
}

#contact-us .content .information div i {
    margin-right: 4px;
}

@media screen and (max-width: 576px) {
    #contact-us .content .information, #contact-us .content .form {
        width: 100%;
    }
}


</style>