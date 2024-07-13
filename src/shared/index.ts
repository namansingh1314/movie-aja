export const config = {
    logoCount: 5,
    firebaseConfig: {
        apiKey: "AIzaSyAVayq3V7P1RsHeaA0xfk5rqJ7Bp7MO3QE",
        authDomain: "movie-aja-44421.firebaseapp.com",
        projectId: "movie-aja-44421",
        storageBucket: "movie-aja-44421.appspot.com",
        messagingSenderId: "620456059855",
        appId: "1:620456059855:web:0886868f94e92fd11728ba",
        measurementId: "G-XNFXLYWSWN"
    },
    servers: {
        iceServers: [
            {
            urls: ['stun:stun1.l.google.com:19302',
                   'stun:stun2.l.google.com:19302'],
            },
        ],
        iceCandidatePoolSize: 10,
    },
    DEV: "development" === 'development',
}

