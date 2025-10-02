import { LayoutWrapper } from "@/components/layout-wrapper"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <LayoutWrapper>
      <div className="max-w-6xl">
        {/* About Section */}
        <section id="about" className="scroll-mt-20 mb-16">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              I am an Assistant Professor in the Department of Robotics and Mechatronics Engineering at the University of Dhaka and the founder and director of the Cortex AI Lab, where we focus on AI in healthcare and bioinspired robotics. My work addresses challenges in medical image and video analysis, with particular emphasis on spatiotemporal modeling, multimodal learning, and self-supervised methods for diagnostic and predictive tasks. The goal is to develop AI systems that clinicians can trust, systems that are interpretable, efficient, and capable of transforming diagnostics and decision-making.

            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Alongside healthcare, I lead projects that extend AI into bioinspired robotics, agriculture, and nanophotonics, reflecting my belief that important advances often emerge at the intersection of disciplines. I maintain ongoing collaborations with both academic groups and industry partners, which broaden the scope of my work and support translation of research into real-world applications.

            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
            I completed both my BSc and MSc in Robotics and Mechatronics Engineering at the University of Dhaka. My work has been recognized with the Dhaka University Research Excellence Award (2025), the Provost Award (2025), and the IQAC Special Merit Award (2024). I have secured several competitive research grants as Principal Investigator and Co-Investigator, supporting projects in healthcare AI, robotics, and interdisciplinary applications.
            </p>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="scroll-mt-20 mb-16">
          <div className="flex items-center mb-6">
            <span className="text-orange-500 mr-2">🔥</span>
            <h2 className="text-2xl font-semibold text-gray-900">News</h2>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex">
              <span className="text-gray-500 w-20 flex-shrink-0">2025.06</span>
              <span className="text-gray-700">Promoted to Assistant Professor at the Department of Robotics & Mechatronics Engineering, University of Dhaka</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-20 flex-shrink-0">2025</span>
              <span className="text-gray-700">Received the Provost Award for standing first in MSc with a CGPA of 3.98</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-20 flex-shrink-0">2025</span>
              <span className="text-gray-700">Received Dhaka University Research Excellence Award for contributions to academic research.</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-20 flex-shrink-0">2024</span>
              <span className="text-gray-700">Received Special Merit Award in Foundation Certificate for University Teaching and Learning (FCUTL)</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-20 flex-shrink-0">2022.06</span>
              <span className="text-gray-700">Completed <span className="font-medium">MSc in Robotics & Mechatronics Engineering</span>, University of Dhaka.</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-20 flex-shrink-0">2019.12</span>
              <span className="text-gray-700">Completed <span className="font-medium">BSc in Robotics & Mechatronics Engineering</span>, University of Dhaka.</span>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="scroll-mt-20 mb-16">
          <div className="flex items-center mb-6">
            <span className="text-orange-500 mr-2">📄</span>
            <h2 className="text-2xl font-semibold text-gray-900">Featured Publications</h2>
          </div>

          <div className="space-y-8">
            {/* BananaSqueezeNet */}
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="md:flex-shrink-0">
                <div className="w-full md:w-48 aspect-[3/2] bg-white rounded border overflow-hidden">
                  <Image src=".\\assets\\banasqueezenet.jpg" alt="Banana leaf disease model" width={192} height={128} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 text-center space-x-2">
                  <span className="inline-block bg-green-700 text-white text-xs px-2 py-1 rounded">Smart Agricultural Tech</span>
                  <span className="inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded">2023</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800 mb-1">
                  <a href="https://www.sciencedirect.com/science/article/pii/S2772375523000448" target="_blank" rel="noopener noreferrer">
                    BananaSqueezeNet: A very fast, lightweight convolutional neural network for the diagnosis of three prominent banana leaf diseases
                  </a>
                </h3>
                <p className="text-gray-700 text-sm mb-2">Bhuiyan MA, Abdullah HM, <strong>Arman SE</strong> (Corresponding Author), et al.</p>
                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">Impact Factor: 6.3</span>
                  <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Q1</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Sub-20MB CNN optimized for edge deployment with strong accuracy.</li>
                  <li>• Real-time inference suitable for field diagnostics.</li>
                </ul>
              </div>
            </div>

            {/* PlantVillageVQA (arXiv) */}
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="md:flex-shrink-0">
                <div className="w-full md:w-48 aspect-[3/2] bg-white rounded border overflow-hidden">
                  <Image src="/assets/plantVillage.png" alt="PlantVillageVQA dataset" width={192} height={128} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 text-center space-x-2">
                  <span className="inline-block bg-gray-900 text-white text-xs px-2 py-1 rounded">arXiv</span>
                  <span className="inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded">2025</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800 mb-1">
                  <a href="https://arxiv.org/pdf/2508.17117" target="_blank" rel="noopener noreferrer">
                    PlantVillageVQA: A Visual Question Answering Dataset for Benchmarking Vision-Language Models in Plant Science
                  </a>
                </h3>
                <p className="text-gray-700 text-sm mb-2">Preprint (arXiv); under review.</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• New VQA benchmark for plant science grounded in expert-curated queries.</li>
                  <li>• Designed for evaluating generalist vision-language models.</li>
                </ul>
              </div>
            </div>

            {/* PlantCareNet */}
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="md:flex-shrink-0">
                <div className="w-full md:w-48 aspect-[3/2] bg-white rounded border overflow-hidden">
                  <Image src="/assets/plantcareNet.png" alt="PlantCareNet visual" width={192} height={128} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 text-center space-x-2">
                  <span className="inline-block bg-emerald-600 text-white text-xs px-2 py-1 rounded">Plant Methods</span>
                  <span className="inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded">2025</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800 mb-1">
                  <a href="https://link.springer.com/article/10.1186/s13007-025-01366-9" target="_blank" rel="noopener noreferrer">
                    PlantCareNet: an advanced system to recognize plant diseases with dual-mode recommendations for prevention
                  </a>
                </h3>
                <p className="text-gray-700 text-sm mb-2">Islam M, Azad AK, Arman SE, et al.</p>
                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">Impact Factor: 5.6</span>
                  <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Q1</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• End-to-end system coupling disease recognition with prevention recommendations.</li>
                  <li>• Dual-mode guidance for proactive and reactive crop care.</li>
                </ul>
              </div>
            </div>

            {/* Generative Nanoparticle Design */}
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="md:flex-shrink-0">
                <div className="w-full md:w-48 aspect-[3/2] bg-white rounded border overflow-hidden">
                  <Image src="/assets/nana_particle.png" alt="Generative nanoparticle design" width={192} height={128} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 text-center space-x-2">
                  <span className="inline-block bg-cyan-700 text-white text-xs px-2 py-1 rounded">Nanoscale Advances</span>
                  <span className="inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded">2024</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800 mb-1">
                  <a href="https://pubs.rsc.org/en/content/articlehtml/2025/na/d4na00859f" target="_blank" rel="noopener noreferrer">
                    Leveraging Generative Neural Networks for Accurate, Diverse, and Robust Nanoparticle Design
                  </a>
                </h3>
                <p className="text-gray-700 text-sm mb-2">Rahman T, Tahmid A, <strong>Arman SE</strong>, et al.</p>
                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">Impact Factor: 4.6</span>
                  <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Q1</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Generative frameworks to explore robust nanoparticle configurations.</li>
                  <li>• Balances accuracy, diversity, and stability in design space.</li>
                </ul>
              </div>
            </div>

            {/* Mango Leaf (ViT) */}
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="md:flex-shrink-0">
                <div className="w-full md:w-48 aspect-[3/2] bg-white rounded border overflow-hidden">
                  <Image src="/assets/mango_leaf.jpg" alt="Mango leaf disease with ViT" width={192} height={128} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 text-center space-x-2">
                  <span className="inline-block bg-orange-600 text-white text-xs px-2 py-1 rounded">Heliyon</span>
                  <span className="inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded">2024</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800 mb-1">
                  <a href="https://www.cell.com/heliyon/home" target="_blank" rel="noopener noreferrer">
                    Deep Learning for Mango Leaf Disease Identification: A Vision Transformer Perspective
                  </a>
                </h3>
                <p className="text-gray-700 text-sm mb-2">Hossain MA, Sakib S, Abdullah HM, <strong>Arman SE</strong> (Corresponding Author)</p>
                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">Impact Factor: 3.4</span>
                  <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Q1</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• ViT-based pipeline for fine-grained agricultural disease recognition.</li>
                  <li>• Demonstrates strong generalization across cultivars and conditions.</li>
                </ul>
              </div>
            </div>

            {/* ICH CT + BO */}
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="md:flex-shrink-0">
                <div className="w-full md:w-48 aspect-[3/2] bg-white rounded border overflow-hidden">
                  <Image src="/assets/intercranial.png" alt="Intracranial hemorrhage CT" width={192} height={128} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 text-center space-x-2">
                  <span className="inline-block bg-blue-700 text-white text-xs px-2 py-1 rounded">IEEE Access</span>
                  <span className="inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded">2023</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800 mb-1">
                  <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10198438" target="_blank" rel="noopener noreferrer">
                    Intracranial Hemorrhage Classification From CT Scan Using Deep Learning and Bayesian Optimization
                  </a>
                </h3>
                <p className="text-gray-700 text-sm mb-2"><strong>Arman SE</strong>, Rahman SS, Irtisam N, et al.</p>
                <div className="flex flex-wrap gap-2 text-xs mb-3">
                  <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">Impact Factor: 3.4</span>
                  <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Q1</span>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• CNN classifiers with BO-driven hyperparameter tuning for CT ICH detection.</li>
                  <li>• Improved operating points under clinical sensitivity constraints.</li>
                </ul>
              </div>
            </div>

            {/* COVIDXception-Net */}
            <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-lg">
              <div className="md:flex-shrink-0">
                <div className="w-full md:w-48 aspect-[3/2] bg-white rounded border overflow-hidden">
                  <Image src="\assets\CovidXception.png" alt="COVID-19 X-ray diagnosis" width={192} height={128} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2 text-center space-x-2">
                  <span className="inline-block bg-slate-700 text-white text-xs px-2 py-1 rounded">SN Computer Science</span>
                  <span className="inline-block bg-gray-800 text-white text-xs px-2 py-1 rounded">2022</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800 mb-1">
                  <a href="https://link.springer.com/article/10.1007/s42979-021-00980-3" target="_blank" rel="noopener noreferrer">
                    COVIDXception-Net: A Bayesian Optimization-Based Deep Learning Approach to Diagnose COVID-19 from X-Ray Images
                  </a>
                </h3>
                <p className="text-gray-700 text-sm mb-2"><strong>Arman SE</strong>, Rahman S, Deowan SA</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Xception-based transfer learning tuned with Bayesian optimization.</li>
                  <li>• Improves sensitivity at clinically relevant thresholds.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Research Grants Section */}

        <section id="fundings" className="scroll-mt-20 mb-16">
          <div className="flex items-center mb-6">
            <span className="text-orange-500 mr-2">💰</span>
            <h2 className="text-2xl font-semibold text-gray-900">Research Grants</h2>
          </div>

          <div className="space-y-6">
            <div>
              <ul className="list-disc pl-5 space-y-3 text-sm text-gray-700">
                <li>
                  <span className="italic">2024,</span> ICT Innovation Fund, ICT Division, Bangladesh (Principal Investigator): <span className="font-medium">Building Smart Biomimic Robots for Underwater Operations.</span>
                </li>
                <li>
                  <span className="italic">2024,</span> University Grants Commission of Bangladesh Grant (Co-Principal Investigator): <span className="font-medium">Development of a Protocol for Rapid Assessment of Plants Responses to Climate-Induced Stress Using an AI-based Framework.</span>
                </li>
                <li>
                  <span className="italic">2023,</span> UGC Grant in collaboration with University of Dhaka (Co-Principal Investigator): <span className="font-medium">SmartPDE: Deep Learning Based Plant Disease Epidemiology and Forecasting.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Past Experience Section */}

        <section id="past-experience" className="scroll-mt-20 mb-16">
          <div className="flex items-center mb-6">
            <span className="text-orange-500 mr-2">🔬</span>
            <h2 className="text-2xl font-semibold text-gray-900">Past Research Experience</h2>
          </div>
          <ul className="list-disc pl-5 space-y-3 text-sm text-gray-700">
            <li>
              <span className="italic">2022,</span> Research Assistant, University of Dhaka — <span className="font-medium">Deep Learning to Detect Diabetic Macular Edema (DME) of Eye (DeepEye),</span> UGC Bangladesh.
            </li>
            <li>
              <span className="italic">2021–2022,</span> Research Assistant, University of Dhaka — <span className="font-medium">AI for Automated Brain Hemorrhage Detection from CT Scans (AIBrainS),</span> CRG.
            </li>
            <li>
              <span className="italic">2021,</span> Visiting Research Assistant, GIS and Remote Sensing Lab, Gazipur Agricultural University.
            </li>
            <li>
              <span className="italic">2020,</span> Research Assistant, University of Dhaka — <span className="font-medium">Deep Learning in Pneumonia Detection from X-ray (DeepMoniaX),</span> UGC Bangladesh.
            </li>
          </ul>
        </section>

        {/* Collaborations Section */}
        <section id="collaborations" className="scroll-mt-20 mb-16">
          <div className="flex items-center mb-6">
            <span className="text-orange-500 mr-2">🤝</span>
            <h2 className="text-2xl font-semibold text-gray-900">Collaborations</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
            <li>Ecology Lab, Department of Botany, University of Dhaka</li>
            <li>Microsystems & Nanoengineering Lab, Department of Electrical and Electronics Engineering, University of Dhaka</li>
            <li>Department of Geology, University of Dhaka</li>
            <li>GIS and Remote Sensing Lab, Gazipur Agricultural University</li>
          </ul>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-20 mb-16">
          <div className="flex items-center mb-6">
            <span className="text-blue-500 mr-2">🎓</span>
            <h2 className="text-2xl font-semibold text-gray-900">Education</h2>
          </div>

          <div className="space-y-6">
            {/* MSc */}
            <div className="flex">
              <span className="text-gray-600 w-40 flex-shrink-0 text-sm">Feb 2020 – Apr 2022</span>
              <div className="flex-1">
                <div className="font-medium">MSc, Robotics & Mechatronics Engineering, University of Dhaka</div>
                <div className="text-gray-700 text-sm mt-1">Thesis: Algorithms for Fast and Efficient Neural Architecture Search</div>
                <div className="text-gray-700 text-sm mt-1">First position (CGPA 3.98); recognised with the Provost Award (2025).</div>
              </div>
            </div>

            {/* BSc */}
            <div className="flex">
              <span className="text-gray-600 w-40 flex-shrink-0 text-sm">Jan 2016 – Dec 2019</span>
              <div className="flex-1">
                <div className="font-medium">BSc, Robotics & Mechatronics Engineering, University of Dhaka</div>
                <div className="text-gray-700 text-sm mt-1">Thesis: Deep Learning in Medical Image Analysis</div> 
              </div>
            </div>

          </div>
        </section>

        {/* Teaching Section */}
        <section id="teaching" className="scroll-mt-20 mb-16">
          <div className="flex items-center mb-6">
            <span className="text-orange-500 mr-2">🎓</span>
            <h2 className="text-2xl font-semibold text-gray-900">Teaching</h2>
          </div>

          <div className="space-y-6 text-gray-800">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Undergraduate</h3>
              <ol className="list-disc pl-6 space-y-1">
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Fundamentals of Programming</li>
                <li>Object Oriented Programming</li>
                <li>Human–Robot Interaction</li>
                <li>Introduction to Robotics</li>
                <li>Programmable Logic Controller</li>
                <li>Engineering Drawing</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Masters</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Neural Networks and Deep Learning</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}