import React from "react";

export default function About() {
    return (
        <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Vishnu.
                <br className="hidden lg:inline-block" />I love to build amazing
                apps.
            </h1>
            <p className="mb-8 leading-relaxed">
            With 5+ years of experience, I possess a wealth of knowledge in developing scalable and efficient software solutions using a diverse range of technologies, including Java, Python, and JavaScript. My expertise extends across the full-stack, with proficiency in front-end frameworks such as ReactJS and Angular, and back-end technologies like NodeJS and SpringBoot. Additionally, I have hands-on experience in designing and implementing AWS solutions, including S3, Lambda, EC2, and CloudFront. My commitment to delivering high-quality software solutions that meet business needs and drive innovation remains steadfast.
            </p>
            <p>
            Furthermore, I hold the <strong>AWS Certified Developer - Associate certification</strong> and the <strong>AWS Cloud Practitioner certification</strong>, which validates my expertise in developing and deploying applications on the Amazon Web Services platform.
            </p>
            <br />
            <div className="flex justify-center">
                <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Get in touch
                </a>
                <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See My Past Work
                </a>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./VSB.png"
                style={{ height: "500px", width: "500px", borderRadius: "25%" }}
            />
            </div>
        </div>
        </section>
    );
}