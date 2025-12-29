const cn = {
    1: [
        {
            id: 1,
            question: "What is a Computer Network?",
            answer: "A network is a collection of devices (nodes) connected by physical media links (cables, fiber, etc.) to allow the sharing of data and resources."
        },
        {
            id: 2,
            question: "Define Bandwidth, Node, and Link.",
            answer: "Bandwidth is the data transfer capacity in bits per second (bps). A Node is any device connected to the network (like a PC). A Link is the physical medium (optical fiber, coaxial cable) connecting two nodes."
        },
        {
            id: 3,
            question: "What is Network Topology and its types?",
            answer: "Network topology is the arrangement of nodes and links. Common types include: Bus, Ring, Star, Mesh, and Tree topology."
        },
        {
            id: 4,
            question: "Explain the Hub vs. Switch difference.",
            answer: "A Hub works at the Physical Layer and broadcasts data to all ports (inefficient). A Switch works at the Data Link Layer, uses MAC addresses to send data to specific ports, and supports packet filtering."
        },
        {
            id: 5,
            question: "What is a NIC?",
            answer: "NIC stands for Network Interface Card. It is a peripheral card attached to a PC to connect it to a network. Every NIC has a unique, hardcoded MAC address."
        },
        {
            id: 6,
            question: "What is a MAC address?",
            answer: "A Media Access Control (MAC) address is a unique 48-bit hardware identifier assigned to a NIC for communication within a network segment."
        },
        {
            id: 7,
            question: "Define Gateway and how it differs from a Router.",
            answer: "A Router connects two similar networks, while a Gateway connects two dissimilar networks (different protocols). Both forward messages and regulate traffic."
        },
        {
            id: 8,
            question: "What are the functions of the Data Link Layer?",
            answer: "Key functions include: Frame synchronization (defining start/end of frames), Flow control, Error control (detection/correction), and Physical Addressing."
        },
        {
            id: 9,
            question: "What is a LAN?",
            answer: "A Local Area Network (LAN) is a collection of devices connected in one physical location, like a home, office, or building."
        },
        {
            id: 10,
            question: "What is the Ping command?",
            answer: "Ping is a utility program used to check the connectivity between two network devices using their IP address or name."
        }
    ],
    2: [
        {
            id: 11,
            question: "Explain the TCP/IP Model layers.",
            answer: "It has 4 layers: 1. Network Access (Ethernet), 2. Internet (IP, ICMP), 3. Transport (TCP, UDP), and 4. Application (HTTP, SMTP, DNS)."
        },
        {
            id: 12,
            question: "What are the 7 layers of the OSI Model?",
            answer: "The layers are: Physical, Data Link, Network, Transport, Session, Presentation, and Application. (Mnemonic: Please Do Not Throw Sausage Pizza Away)."
        },
        {
            id: 13,
            question: "What is an IP Address? (Public vs. Private)",
            answer: "An IP address is a unique numerical label for devices on a network. Public IPs are used for internet communication, while Private IPs are reserved for local networks and aren't valid on the internet."
        },
        {
            id: 14,
            question: "Difference between IPv4 and IPv6?",
            answer: "IPv4 uses 32-bit addresses (approx. 4 billion addresses), while IPv6 uses 128-bit addresses (virtually unlimited). IPv6 also provides better security and routing efficiency."
        },
        {
            id: 15,
            question: "What is DNS and a DNS Forwarder?",
            answer: "DNS maps domain names (google.com) to IP addresses. A DNS Forwarder sends queries it cannot resolve to an external DNS server for resolution."
        },
        {
            id: 16,
            question: "Difference between TCP and UDP?",
            answer: "TCP is connection-oriented, reliable, and slower (error checking). UDP is connectionless, faster, but unreliable (no retransmission of lost packets)."
        },
        {
            id: 17,
            question: "What is HTTP and HTTPS?",
            answer: "HTTP (port 80) is the standard for web communication. HTTPS (port 443) is the secure version that uses SSL/TLS to encrypt data."
        },
        {
            id: 18,
            question: "What is SMTP?",
            answer: "Simple Mail Transfer Protocol (SMTP) is used to transmit emails over the internet. It typically listens on port 25."
        },
        {
            id: 19,
            question: "What is Subnetting?",
            answer: "Subnetting is the process of dividing a large network into smaller, manageable sub-networks (subnets) to improve routing efficiency and security."
        },
        {
            id: 20,
            question: "What is APIPA?",
            answer: "Automatic Private IP Addressing (APIPA) allows a computer to self-configure an IP address when a DHCP server is unreachable."
        }
    ],
    3: [
        {
            id: 21,
            question: "Explain the TCP 3-Way Handshake.",
            answer: "It is a process to establish a connection: 1. Client sends SYN (Synchronize), 2. Server sends SYN-ACK, 3. Client sends ACK (Acknowledge). Data transfer begins after this."
        },
        {
            id: 22,
            question: "What happens when you enter 'google.com' in a browser?",
            answer: "1. Browser checks cache. 2. DNS lookup (via UDP) to find IP. 3. TCP 3-way handshake to connect. 4. HTTP request sent. 5. Server responds with data. 6. Browser renders content."
        },
        {
            id: 23,
            question: "What is a Firewall?",
            answer: "A security system that monitors incoming and outgoing traffic and blocks it based on security policies, acting as a barrier between private and public networks."
        },
        {
            id: 24,
            question: "What is a VPN and its advantages?",
            answer: "A Virtual Private Network creates a secure 'tunnel' over the internet. Advantages include secure remote access, data encryption, and disguised online identity."
        },
        {
            id: 25,
            question: "What are the different types of Delays in a network?",
            answer: "Transmission delay, Propagation delay, Queuing delay, and Processing delay."
        },
        {
            id: 26,
            question: "Explain the RSA Algorithm.",
            answer: "RSA is an asymmetric cryptography algorithm using two keys: a Public Key (given to everyone for encryption) and a Private Key (kept secret for decryption)."
        },
        {
            id: 27,
            question: "What is Server-side Load Balancing?",
            answer: "A central load balancer (like AWS ELB) receives client requests and routes them to one of many backend server instances using algorithms like Round Robin."
        },
        {
            id: 28,
            question: "Why is HTTPS considered safer than HTTP?",
            answer: "HTTPS uses SSL/TLS protocols to encrypt communication, ensuring that even if data is intercepted, it cannot be read by third parties."
        },
        {
            id: 29,
            question: "What is a Proxy Server?",
            answer: "A proxy server acts as a gateway between a user and the internet, masking the user's IP address and providing an additional layer of security and caching."
        },
        {
            id: 30,
            question: "What is the significance of the Network Layer?",
            answer: "The Network Layer is responsible for logical addressing (IP) and routing packets across different networks to their final destination."
        }
    ]
};

export default cn;