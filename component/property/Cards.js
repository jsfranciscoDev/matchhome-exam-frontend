import React from 'react';
import Image from 'next/image';

const Cards = ({ properties }) => {
    return (
        <div className="p-20 bg-[#1D3461] h-full">
                {properties.map((property, index) => (
                     <div className="mt-10 bg-gray-200 rounded-2xl">
                    <table key={index} className="min-w-full mt-5 divide-gray-200">
                        <thead className="">
                            <tr>
                                <th className="px-6 py-5 text-xs font-semibold tracking-wide text-center font-montserrat" style={{  fontSize: '16px', fontWeight: 600, lineHeight: '19px', letterSpacing: '0em', textAlign: 'center', color: '#000000' }}>Property Type</th>
                                <th className="px-6 py-5 text-xs font-semibold tracking-wide text-center font-montserrat" style={{  fontSize: '16px', fontWeight: 600, lineHeight: '19px', letterSpacing: '0em', textAlign: 'center', color: '#000000' }}>Model</th>
                                <th className="px-6 py-5 text-xs font-semibold tracking-wide text-center font-montserrat" style={{  fontSize: '16px', fontWeight: 600, lineHeight: '19px', letterSpacing: '0em', textAlign: 'center', color: '#000000' }}>Location</th>
                                <th className="px-6 py-5 text-xs font-semibold tracking-wide text-center font-montserrat" style={{  fontSize: '16px', fontWeight: 600, lineHeight: '19px', letterSpacing: '0em', textAlign: 'center', color: '#000000' }}>Area</th>
                                <th className="px-6 py-5 text-xs font-semibold tracking-wide text-center font-montserrat" style={{  fontSize: '16px', fontWeight: 600, lineHeight: '19px', letterSpacing: '0em', textAlign: 'center', color: '#000000' }}>Price</th>
                                <th className="px-6 py-5 text-xs font-semibold tracking-wide text-center font-montserrat" style={{  fontSize: '16px', fontWeight: 600, lineHeight: '19px', letterSpacing: '0em', textAlign: 'center', color: '#000000' }}>Availability</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-montserrat" style={{  fontSize: '14px', fontWeight: 400, lineHeight: '17px', letterSpacing: '0em', textAlign: 'center', color: '#000000' }}>{property.propertyType}</td>
                                <td className="px-6 py-4 whitespace-nowrap font-montserrat" style={{  fontSize: '14px', fontWeight: 400, lineHeight: '17px', letterSpacing: '0em', textAlign: 'center', color: '#000000' }}>{property.model}</td>
                                <td className="px-6 py-4 whitespace-nowrap font-montserrat" style={{  fontSize: '14px', fontWeight: 400, lineHeight: '17px', letterSpacing: '0em', textAlign: 'center', color: '#000000' }}>{property.location}</td>
                                <td className="px-6 py-4 whitespace-nowrap font-montserrat" style={{  fontSize: '14px', fontWeight: 400, lineHeight: '17px', letterSpacing: '0em', textAlign: 'center', color: '#000000' }}>{property.area}</td>
                                <td className="px-6 py-4 whitespace-nowrap font-montserrat" style={{  fontSize: '14px', fontWeight: 400, lineHeight: '17px', letterSpacing: '0em', textAlign: 'center', color: '#000000' }}>{property.price}</td>
                                <td className="px-6 py-4 whitespace-nowrap font-montserrat" style={{  fontSize: '14px', fontWeight: 400, lineHeight: '17px', letterSpacing: '0em', textAlign: 'center', color: '#007E66' }}>{property.availability}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div className="flex justify-between p-5 pl-5 pr-5 mt-5 space-x-6 pr-30 rounded-bl-2xl rounded-br-2xl md:pl-48 md:pr-48" style={{ backgroundColor: '#007E66'}}>
                        <a className="flex items-center px-4 py-2 text-white">
                            <Image src="/images/location.png" alt="Location" width={20} height={20} className="w-5 h-5 mr-6" />
                            View Property Map
                        </a>
                        <button className="px-8 py-2 text-sm font-semibold font-bold leading-5 tracking-normal text-center text-black font-montserrat md:text-base md:leading-15" style={{ borderRadius: '50px', backgroundColor: '#FFB20C' }}>
                            View Property Full Details
                        </button>
                    </div>

                    </div>
                ))}
        </div>
    );
};

export default Cards;
