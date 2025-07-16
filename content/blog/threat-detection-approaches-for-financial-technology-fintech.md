# Threat detection approaches for Financial Technology (FinTech)

## Planning for incidents in one of the most secure and regulated industries in cyberspace

Jumping back into Cybersecurity Architecture this past week allowed me to plan a set of procedures to implement threat detection plan and team for a financial institution. As a developer, architect, and technical advisor I often advocate for the implementation of secure by default processes, infrastructure, and auditing. When it comes to cybersecurity, especially in the modern era, not planning for an incident can be an incident in itself.

As Financial Technology transaction enumerate in digital volume, the more surface area and risk firms will need to manage as a financial services provider. When weighing the vulnerabilities, defining the risks, and identifying the threats a working policy with incorporated standards will stand as a reference for the complex guidelines.

### Who are you going to call when the server goes down and ransomware goes up?

When scaling the infrastructure to support customers and partners in financial services, it is important to establish roles and guidelines for the event of threats and the business reporting. These roles can be identified in many ways with different titles, though as a defined set, [their objectives should all have coverage as the cybersecurity domain keeps evolving](https://nordicdefender.com/blog/cyber-security-team-structure) and expanding.

A security team outside of the Chief Information Security Officer (CISO), should take place in all threat detection and reporting. Staff members across the incident response team should be split across all events. In each incident the Security Operations Center Manager (SOCM) can determine who is available for which incidents and when. In the event of incident and vulnerability detection, including all regularly scheduled risk assessments, the report will be sent and relayed to the CISO.

_Security Operations Center - Incident Response - Staffing Roles:_

- Chief Information Security Officer (CISO): Managing the information security program

- Security Operations Center Manager (SOCM): Managing the SOC and security operation

- Cybersecurity Architect: Researching and designing the security operation

- Cybersecurity Engineer: Implementing and establishing the security operation

- Cybersecurity Analyst: Analyzing threat and risk data about the security operation

As reflected by the roles and hierarchy of the Security Operations Center (SOCM), the staffing depicts the requirements of this team to plan, engineer, and analyze the security landscape of the security operation. In supplement to the staffing roles, some outline of the responsibilities can be defined for hiring and sourcing purposes, aligned with this specific focus and task of threat detection.

In the financial technology organization, the Chief Information Security Officer (CISO) oversees information across the business, with the focus of securing the operations and effectiveness of the security to support its movement across the firm. The CISO will work across business units, and task the various security and technology teams with enabling the business to securely operate.

As a key staff member to the CISO, the Security Operations Center Manager (SOCM) oversees the security team that handles day to day operations, they manage the team, approvals, and move the staff around within the SOC to enable success. As the SOC Manager, they adapt the teams' roster to address challenges and prioritize the architects to begin the process of addressing current and future threats.

The Cybersecurity Architect takes on the planning and provisioning of the overall infrastructure and security whether it is services or data architecture. The architecture of the services and how they contribute to the success of the full operation part of the primary consideration and role of the architect, in addition to their research, review of the data and emerging threats.

As a Cybersecurity Engineer, this staff member will work through the implementation of systems with a technical proficiency of code and Infrastructure as Code (IaC). The engineer will provide various work products that align with developing the system from the ground up, including maintenance, triage, and changes requested by the Cybersecurity Architect and approved by the SOC Manager.

In the Cybersecurity Analyst role, staff members in this area will work to review the data, they will provide internal team reports, review system events, changes, and monitor the system upon change. The analysts are the eyes and ears of the team from data in transit to data at rest, making sure to turn over every piece of information.

If the scale of the security landscape increases to a scale that demands more team members, the SOCM and CISO will find the operational requirement and work with the financial institutions administration to increase the staffing.

### Detection and reporting across the network layers

In the daily fluctuation of data, security, and network traffic it is important to create policies leading into the future that include threat detection steps. Proactive threat detection, investigation of threats and anomalies, remediation and response activities, and recovery of corrupted assets are some of the general objectives that the Security Operations Center (SOC) should be prepared to handle.

These standards are subject to change in addition to their implementation and meaning to be reshaped as technology advances. Through this detection plan, specific strategies may be employed for each of these major categories and will be outlined accordingly.

##### Proactive Threat Detection

A real-time approach to analyzing, detecting, and mitigating risk begins by enabling proactive threat hunting measures available through [Microsoft Sentinel](https://www.microsoft.com/en-us/security/business/siem-and-xdr/microsoft-sentinel/). In a highly secure cloud environment, Microsoft Sentinel will scale security coverage with cloud flexibility, allowing monitoring and event management to scale in throughput to match active Microsoft Azure Cloud resources.

A [Security Information and Event Management (SIEM)](https://www.microsoft.com/en-us/security/business/security-101/what-is-siem), solution is a powerful monitoring tool that can adaptively scan and monitor data flowing through the network. Detecting and evaluating threats in the landscape of network traffic that will be automated and enhanced by Artificial Intelligence (AI), trained on Threat Intelligence (TI). The reference set of data based on historical threats and advisories, enables the SIEM tool to investigate and validate threats, followed by reporting back to the security team for further investigation.

Information across the network, sent across devices endpoints, and processed through the web services can be monitored through [Endpoint Detection and Response (EDR) with Microsoft Defender](https://www.microsoft.com/en-us/security/business/endpoint-security/microsoft-defender-endpoint) for Endpoint. Microsoft Defender for Business will fortify the network, devices, and empower the services to move at machine speed while establishing secure devices end to end.

##### Investigation of Threats and Anomalies

When identified threats are forwarded to a Single Pane of Glass (SPOG) view with the Microsoft SIEM technologies, they are available for review by the security team which can handled escalation and remediation. The Microsoft Sentinel platform can enable automation and orchestration through playbooks, to create a [Security Orchestration, Automation, and Response (SOAR) framework that assists the security team](https://learn.microsoft.com/en-us/azure/sentinel/automation/automate-responses-with-playbooks) in validating threats and risks.

In evaluating the events occurring within the system, Microsoft Sentinel provides integrations through playbooks for further enhancement of data, by enriching incidents with Virus Total to use Open-Source Intelligence (OSINT) about reference-able similar incidents. These enhanced incidents can be forwarded to an events channel in Microsoft Teams, where the security team can further review and prioritize event information.

Monitoring of user escalation and access anomalies through the lens of Conditional Access will be identified and [auto remediated by way of Microsoft Entra ID Protection](https://learn.microsoft.com/en-us/entra/id-protection/overview-identity-protection), this is passed in with the integration to Microsoft Sentinel. Communication channels used for security operations can also [automate the protection of collaboration tools by actively monitoring with AI-powered defense](https://www.microsoft.com/en-us/security/business/siem-and-xdr/microsoft-defender-office-365) that can detect phishing and scam communications.

##### Remediation and Response Activities

Through the automation of Microsoft Sentinel, Microsoft Defender for Business, and Microsoft Entra ID, the security team can establish support from an actively scanning, remediating and escalating system. In a task-driven process the security team can perform weekly prioritization of the affected services, applications, and critical Information Technology (IT) infrastructure issues.

When the threats are beyond automated remediation, [the weekly tasks and scheduled maintenance should follow a prioritization provided through the Microsoft Defender Vulnerability Management](https://www.microsoft.com/en-us/security/business/threat-protection/microsoft-defender-vulnerability-management#tabxe8fdee3e603241fcaf114ca8d9929b1a) dashboard. The security team can follow the provided security recommendations to focus on cyberthreats that pose the highest risk and forecast their remediation in line with other events identified in the SIEM.

##### Recovery of Corrupted Assets

If information and systems become compromised by a vulnerability that was unknown prior to an attack or incident, the security team can work to identify the threat, remediate the risk, and recover the system to restore and protect data.

The security team can work through the SIEM and SOAR utilities provided by Microsoft Sentinel and Microsoft Defender for Business, these Software as a Service (SaaS) platform will contain the information and research tools to gain the insight to remediate vulnerabilities.

When working through the remediation process and enhanced security definitions provided in Microsoft Teams through automations, the security team can build a report around each incident that was not initially detected. Through support from Microsoft Security Copilot, the [system will summarize vast data signals into key insights to cut through the noise](https://www.microsoft.com/en-us/security/business/ai-machine-learning/microsoft-security-copilot), and make use of AI-driven guidance and analysis.

Digital versioning and service backups stored in the Microsoft Azure Cloud can be used to collocate and detect data that may have arrived during the incident and encapsulate vulnerabilities in containers running at the time. If required a snapshot of the database, applications, virtual machines, and other cloud storage can be restored once the vulnerabilities are remediated.

As the security team identifies the vulnerabilities in the system, their reach through security logs, and the general propensity of threat to a similar system with OSINT and Common Vulnerabilities and Exposures (CVE) references, they can document the affected systems, data, and users in their incident report. Through incident reports, general data about the harm and depth of these systems, once remediated can be closed and shared in a security incident database to continue to model AI and TI threat detection mechanisms for future events.
