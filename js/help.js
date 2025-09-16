export const help = `
  <section class="help-page">
    <!-- Header -->
    <header class="help-header">
      <h2><i class="fas fa-question-circle me-2" style="margin-top:0;"></i> Help & FAQs</h2>
      <p class="subtitle">
        Quick answers to common questions. Can’t find what you’re looking for? 
        Check our <a href="#">documentation</a> or reach out to support.
      </p>
    </header>

    <!-- Search -->
    <div class="faq-search">
      <input type="text" id="faqSearch" placeholder="Search for a question..." />
      <i class="fas fa-search"></i>
    </div>

    <!-- FAQ Accordion with Pagination -->
    <div class="faq-list" id="faqList">
      <!-- Page 1 -->
      <div class="faq-item">
        <button class="faq-question">Is there a free trial available? <i class="fas fa-chevron-down"></i></button>
        <div class="faq-answer">
          <p>Yes, you can try GreenSight for free for 30 days. We’ll even provide a free onboarding session to help you get started.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question">What is your cancellation policy? <i class="fas fa-chevron-down"></i></button>
        <div class="faq-answer">
          <p>You can cancel your subscription anytime. If you cancel before your billing period ends, we’ll refund the remaining balance.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question">How does billing work? <i class="fas fa-chevron-down"></i></button>
        <div class="faq-answer">
          <p>Plans are billed per organization, not per bin. You can upgrade or downgrade anytime through your account settings.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question">How do I change my account email? <i class="fas fa-chevron-down"></i></button>
        <div class="faq-answer">
          <p>Go to <b>Account Settings</b> → <b>Profile</b> and update your email address. You’ll need to confirm the new email.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question">Can I add multiple team members? <i class="fas fa-chevron-down"></i></button>
        <div class="faq-answer">
          <p>Yes. GreenSight supports multiple team members with different permission levels (Admin, Manager, Staff).</p>
        </div>
      </div>

      <!-- Page 2 -->
      <div class="faq-item">
        <button class="faq-question">Do you provide customer support? <i class="fas fa-chevron-down"></i></button>
        <div class="faq-answer">
          <p>Yes. Our support team is available 24/7 through live chat and email to assist you with any issues.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question">Is my data secure? <i class="fas fa-chevron-down"></i></button>
        <div class="faq-answer">
          <p>All data is encrypted in transit and at rest. We also comply with GDPR and other global security standards.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question">Can I integrate GreenSight with other systems? <i class="fas fa-chevron-down"></i></button>
        <div class="faq-answer">
          <p>Yes. GreenSight offers APIs and integrations with platforms like PowerBI, Zapier, and Google Maps.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question">Do you support mobile devices? <i class="fas fa-chevron-down"></i></button>
        <div class="faq-answer">
          <p>Absolutely. The platform is responsive and also has native apps for iOS and Android.</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question">Can I export reports? <i class="fas fa-chevron-down"></i></button>
        <div class="faq-answer">
          <p>Yes. Reports can be exported in PDF and CSV formats, with custom date ranges and filters.</p>
        </div>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="faq-pagination">
      <button id="prevFaq" class="btn-outline" disabled><i class="fas fa-chevron-left"></i> Previous</button>
      <span id="faqPageIndicator">Page 1 of 2</span>
      <button id="nextFaq" class="btn-outline">Next <i class="fas fa-chevron-right"></i></button>
    </div>


    <!-- Footer -->
    <footer class="faq-footer">
      <div class="faq-contact">
        <img src="assets/pexels-shvetsa-11286082.jpg" alt="Support Team" class="faq-support-img" />
        <div>
          <h4>Still have questions?</h4>
          <p>Can’t find the answer you’re looking for? 
            <a href="#">Chat with our friendly team</a> anytime.</p>
        </div>
      </div>
      <div class="faq-buttons">
        <button class="btn-outline"><i class="fas fa-book me-1"></i> Documentation</button>
        <button class="btn-primary"><i class="fas fa-comments me-1"></i> Get in touch</button>
      </div>
    </footer>
  </section>
`;

export function initHelpPage() {
  const faqItems = document.querySelectorAll(".faq-item");
  const itemsPerPage = 5;
  let currentPage = 1;
  const totalPages = Math.ceil(faqItems.length / itemsPerPage);

  const prevBtn = document.getElementById("prevFaq");
  const nextBtn = document.getElementById("nextFaq");
  const pageIndicator = document.getElementById("faqPageIndicator");
  const searchInput = document.getElementById("faqSearch"); // ✅ define search input

  function renderPage(page) {
    faqItems.forEach((item, index) => {
      item.style.display =
        index >= (page - 1) * itemsPerPage && index < page * itemsPerPage
          ? "block"
          : "none";
    });

    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === totalPages;
    pageIndicator.textContent = `Page ${page} of ${totalPages}`;
  }

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage(currentPage);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderPage(currentPage);
    }
  });

  // Accordion toggle
  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    questionBtn.addEventListener("click", () => {
      faqItems.forEach(i => {
        if (i !== item) i.classList.remove("open");
      });
      item.classList.toggle("open");
    });
  });

  // Search filter (resets pagination to show all results)
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      let anyMatch = false;

      faqItems.forEach(item => {
        const question = item.querySelector(".faq-question").textContent.toLowerCase();
        const answer = item.querySelector(".faq-answer").textContent.toLowerCase();
        if (question.includes(query) || answer.includes(query)) {
          item.style.display = "block";
          anyMatch = true;
        } else {
          item.style.display = "none";
        }
      });

      // Hide pagination if searching
      document.querySelector(".faq-pagination").style.display = query ? "none" : "flex";
      if (!query) renderPage(currentPage); // restore pagination when search is cleared
    });
  }

  // ✅ Show first page immediately
  renderPage(currentPage);
}

