<template>
  <div class="bg-gray-900 text-white">
    <div class="bg-black py-10">
      <!-- Logo Section -->
      <div class="flex justify-center space-x-6 mb-8">
        <img src="/images/nasdaq.svg" />
        <img src="/images/bmw.svg" />
        <img src="/images/netApp.svg" />
        <img src="/images/bmw.svg" />
        <img src="/images/eventbrite.svg" />
      </div>

      <!-- Footer Links -->
      <div
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-screen-xl mx-auto px-6"
      >
        <!-- Certifications by Issuer -->
        <div>
          <h4 class="text-gray-400 font-semibold mb-3">
            Certifications by Issuer
          </h4>
          <ul>
            <li>
              <a href="#" class="hover:underline"
                >Amazon Web Services (AWS) Certifications</a
              >
            </li>
            <li>
              <a href="#" class="hover:underline">Six Sigma Certifications</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Microsoft Certifications</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Cisco Certifications</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Tableau Certifications</a>
            </li>
            <li>
              <a href="#" class="hover:underline">See all Certifications</a>
            </li>
          </ul>
        </div>

        <!-- Certifications by Skill -->
        <div>
          <h4 class="text-gray-400 font-semibold mb-3">
            Certifications by Skill
          </h4>
          <ul>
            <li>
              <a href="#" class="hover:underline"
                >Cybersecurity Certification</a
              >
            </li>
            <li>
              <a href="#" class="hover:underline"
                >Project Management Certification</a
              >
            </li>
            <li><a href="#" class="hover:underline">Cloud Certification</a></li>
            <li>
              <a href="#" class="hover:underline"
                >Data Analytics Certification</a
              >
            </li>
            <li>
              <a href="#" class="hover:underline"
                >HR Management Certification</a
              >
            </li>
            <li>
              <a href="#" class="hover:underline">See all Certifications</a>
            </li>
          </ul>
        </div>

        <!-- Web Development -->
        <div>
          <h4 class="text-gray-400 font-semibold mb-3">Web Development</h4>
          <ul>
            <li><a href="#" class="hover:underline">Web Development</a></li>
            <li><a href="#" class="hover:underline">JavaScript</a></li>
            <li><a href="#" class="hover:underline">React JS</a></li>
            <li><a href="#" class="hover:underline">Angular</a></li>
            <li><a href="#" class="hover:underline">Java</a></li>
          </ul>
        </div>

        <!-- Data Science -->
        <div>
          <h4 class="text-gray-400 font-semibold mb-3">Data Science</h4>
          <ul>
            <li><a href="#" class="hover:underline">Data Science</a></li>
            <li><a href="#" class="hover:underline">Python</a></li>
            <li><a href="#" class="hover:underline">Machine Learning</a></li>
            <li><a href="#" class="hover:underline">ChatGPT</a></li>
            <li><a href="#" class="hover:underline">Deep Learning</a></li>
          </ul>
        </div>

        <!-- IT Certifications -->
        <div>
          <h4 class="text-gray-400 font-semibold mb-3">IT Certifications</h4>
          <ul>
            <li><a href="#" class="hover:underline">Amazon AWS</a></li>
            <li>
              <a href="#" class="hover:underline"
                >AWS Certified Cloud Practitioner</a
              >
            </li>
            <li>
              <a href="#" class="hover:underline"
                >AZ-900: Microsoft Azure Fundamentals</a
              >
            </li>
            <li>
              <a href="#" class="hover:underline"
                >AWS Certified Solutions Architect - Associate</a
              >
            </li>
            <li><a href="#" class="hover:underline">Kubernetes</a></li>
          </ul>
        </div>

        <!-- Communication -->
        <div>
          <h4 class="text-gray-400 font-semibold mb-3">Communication</h4>
          <ul>
            <li>
              <a href="#" class="hover:underline">Communication Skills</a>
            </li>
            <li><a href="#" class="hover:underline">Presentation Skills</a></li>
            <li><a href="#" class="hover:underline">Public Speaking</a></li>
            <li><a href="#" class="hover:underline">Writing</a></li>
            <li><a href="#" class="hover:underline">PowerPoint</a></li>
          </ul>
        </div>

        <!-- Additional Sections: Leadership, Business Analytics & Intelligence, About, Discovery Udemy, Udemy for Business, Legal & Accessibility -->
        <div>
          <h4 class="text-gray-400 font-semibold mb-3">Leadership</h4>
          <ul>
            <li><a href="#" class="hover:underline">Leadership</a></li>
            <li><a href="#" class="hover:underline">Management Skills</a></li>
            <li><a href="#" class="hover:underline">Project Management</a></li>
            <li>
              <a href="#" class="hover:underline">Personal Productivity</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Emotional Intelligence</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-gray-400 font-semibold mb-3">
            Business Analytics & Intelligence
          </h4>
          <ul>
            <li><a href="#" class="hover:underline">Microsoft Excel</a></li>
            <li><a href="#" class="hover:underline">SQL</a></li>
            <li><a href="#" class="hover:underline">Microsoft Power BI</a></li>
            <li><a href="#" class="hover:underline">Data Analysis</a></li>
            <li><a href="#" class="hover:underline">Business Analysis</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-gray-400 font-semibold mb-3">About</h4>
          <ul>
            <li><a href="#" class="hover:underline">About us</a></li>
            <li><a href="#" class="hover:underline">Careers</a></li>
            <li><a href="#" class="hover:underline">Contact us</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-gray-400 font-semibold mb-3">Discovery Udemy</h4>
          <ul>
            <li><a href="#" class="hover:underline">Get the app</a></li>
            <li><a href="#" class="hover:underline">Teach on Udemy</a></li>
            <li><a href="#" class="hover:underline">Become a Partner</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-gray-400 font-semibold mb-3">Udemy for Business</h4>
          <ul>
            <li><a href="#" class="hover:underline">Udemy Business</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-gray-400 font-semibold mb-3">
            Legal & Accessibility
          </h4>
          <ul>
            <li>
              <a href="#" class="hover:underline">Accessibility statement</a>
            </li>
            <li><a href="#" class="hover:underline">Privacy policy</a></li>
            <li><a href="#" class="hover:underline">Sitemap</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
