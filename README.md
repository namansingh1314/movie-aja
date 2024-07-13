# Movie-Aja - Watch Together

A web application that leverages pure WebRTC protocol, Google Firestore as a signaling server, and Chromium Tab Sharing protocol to allow screen sharing with audio, enabling friends to watch movies and videos together despite the distance.

<a href="https://movie-aja.web.app" target="_blank">Application</a>

# Motivation
I'm currently in a long-distance relationship myself and have been for the past three years. I understand the longing desire to watch and share experiences with friends, and how most platforms out there are not dedicated to this need, while allowing video conversation simultaneously. I am setting out to solve the problem once and for all, hence the creation of Movie-Aja.

# Features
- Sharing screen with audio using Chromium-based browsers.
<img width="600" src="showcase/chromium_share.png" />

- Enjoy video at 60fps along with high-quality audio.
- Live Video Chat between parties.
- Audio Only Chat between parties.

# To Run this Locally

- Use "npm install" in the project directory.
- Setup Firebase in Shared / Index.ts file.
- Then hit "npm start".

# Instruction
1. The flow is relatively straightforward. One user can create the call by clicking *Create Call*, then proceed to share the Call ID by clicking on the Location pin, which will copy the ID to their clipboard.
2. The other users can join the call by entering the Call ID and hit *Join Call*.
3. And that's it, share your tab and enjoy the show.

# Limitation
This project is built using pure WebRTC with no forwarding server in the middle, so as users per room cross the threshold of 3 people, the stream's quality will start to decline.


