import React from "react";
import { TbCertificate } from 'react-icons/tb';
import { certifications } from "../data";

export default function Certifications() {
    return (
        <section id="certifications">
            <div className="container px-5 py-10 mx-auto text-center max-w-screen-lg">
                <TbCertificate className="w-12 h-12 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                    Certifications
                </h1>
                <div className="flex flex-wrap m-4">
                    {certifications
                        .filter((certification) => certification.passed) // only show passed certifications
                        .map((certification) => (
                            <a>
                                <div className="p-4 md:w-full">
                                    <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                                        <div className="inline-flex items-center">
                                            <img
                                                alt="certification"
                                                src={certification.image}
                                                className="w-12 flex-shrink-0 object-cover object-center"
                                            />
                                            <span className="flex-grow flex flex-col pl-4">
                                                <span className="title-font font-medium text-white">
                                                    {certification.name}
                                                </span>
                                                <span className="text-gray-500 text-sm uppercase">
                                                    {certification.company}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                </div>
                <p className="text-white mb-4">
                    I am going to give the AWS Cloud Practitioner Certification exam soon. Will update this soon.
                    <br/>Check out my <a className="text-blue-500 underline" href="https://www.linkedin.com/in/vishnusaibhosekar/">LinkedIn Profile</a> to view more certificates.
                </p>
            </div>
        </section>
    );
}
