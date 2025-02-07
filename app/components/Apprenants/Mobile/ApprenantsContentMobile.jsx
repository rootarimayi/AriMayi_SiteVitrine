import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import par1 from "@/public/assets/PHOTO-2024-12-22-20-02-46.jpg";
import par2 from "@/public/assets/PHOTO-2024-12-22-20-03-05.jpg";
import par3 from "@/public/assets/PHOTO-2024-12-22-20-03-34.jpg";
import app1 from "@/public/assets/PHOTO-2024-12-22-20-01-27.jpg";
import app2 from "@/public/assets/PHOTO-2024-12-22-20-01-44.jpg";
import app3 from "@/public/assets/PHOTO-2024-12-22-20-02-06.jpg";


export default function ApprenantsContentMobile() {
    return (
        <>
            {/* Section 1 */}
            <section className="max-w-full px-4 mx-auto mb-6 mt-0">
                <div className="w-full md:w-[300px] mx-auto rounded-3xl bg-[#353535] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex flex-col gap-4 p-4">
                        <h2 className="text-lg font-extrabold text-white">L&#39;AFEST</h2>
                        <p className="text-sm text-white">
                            À chaque étape, le cadre de l&#39;<span className="text-blue-600">AFEST</span> allie formation, autonomie et suivi personnalisé, permettant ainsi un apprentissage progressif, pertinent et immédiatement applicable.
                        </p>
                        <p className="text-sm text-white">
                            Notre approche à la fois humaine et performante assure à chaque apprenant, quel que soit son parcours, une montée en compétences concrète, et lui donne les clés pour s&apos;insérer durablement dans le monde du travail.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section className="py-12">
                <div className="px-4">
                    {/* Titre centré */}
                    <h3 className="text-center text-[32px] font-monserrat font-extrabold uppercase gradient-title mb-8">
                        Pour qui ?
                    </h3>

                    {/* Container pour les 3 colonnes en version mobile */}
                    <div className="flex flex-col gap-8">
                        {/* Jeunes diplômés */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-32 h-32 relative mb-4">
                                <Image
                                    src={app1}
                                    alt="Jeunes diplômés"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                                Pour les jeunes diplômés
                            </h3>
                            <p className="text-sm text-gray-600">
                                C&apos;est une occasion unique de transformer vos connaissances
                                théoriques en savoir-faire opérationnels, directement sur le
                                terrain, là où les compétences prennent tout leur sens.
                            </p>
                        </div>

                        {/* Personnes en reconversion */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-32 h-32 relative mb-4">
                                <Image
                                    src={app2}
                                    alt="Personnes en reconversion"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                                Pour les personnes en reconversion
                            </h3>
                            <p className="text-sm text-gray-600">
                                L&apos;AFEST propose un accompagnement dynamique et progressif, vous
                                permettant d&apos;apprendre un métier par l&apos;expérimentation, de
                                surmonter les défis du changement et de maîtriser de nouvelles
                                pratiques au quotidien.
                            </p>
                        </div>

                        {/* Futurs apprentis */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-32 h-32 relative mb-4">
                                <Image
                                    src={app3}
                                    alt="Futurs apprentis"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                                Pour les futurs apprentis
                            </h3>
                            <p className="text-sm text-gray-600">
                                Accédez à une formation qui mêle pratique et réflexion, au cœur
                                de situations réelles et efficacement préparatoires aux
                                exigences des entreprises.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}