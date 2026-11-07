(() => {
  document.querySelectorAll("[data-lesson-quiz]").forEach(quiz => {
    const questions = [...quiz.querySelectorAll(".quiz-question")];
    const result = quiz.querySelector(".quiz-result");
    const submit = quiz.querySelector("[data-quiz-submit]");
    const reset = quiz.querySelector("[data-quiz-reset]");
    if (!submit || !result || !questions.length) return;

    submit.addEventListener("click", () => {
      let score = 0;
      let answered = 0;
      questions.forEach(question => {
        const correct = (question.dataset.correct || "").split(",").filter(Boolean);
        const selected = [...question.querySelectorAll("input:checked")].map(input => input.value);
        const isAnswered = selected.length > 0;
        if (isAnswered) answered++;
        const isCorrect = selected.length === correct.length && correct.every(value => selected.includes(value));
        if (isCorrect) score++;
        question.classList.add("graded");
        question.querySelectorAll(".quiz-option").forEach(option => {
          const input = option.querySelector("input");
          const feedback = option.querySelector(".option-feedback");
          const isRight = correct.includes(input.value);
          const chosen = input.checked;
          option.classList.toggle("correct", isRight);
          option.classList.toggle("incorrect", chosen && !isRight);
          input.disabled = true;
          if (feedback) feedback.innerHTML = "<strong>" + (isRight ? "Correct choice: " : chosen ? "Your selection: " : "Not selected: ") + "</strong>" + feedback.dataset.explanation;
        });
      });
      const percent = Math.round(score / questions.length * 100);
      result.classList.add("visible");
      result.innerHTML = "<strong>Result: " + score + " / " + questions.length + " (" + percent + "%)</strong><br>" + (answered === questions.length ? "All questions answered. " : answered + " of " + questions.length + " questions answered. ") + (score === questions.length ? "Excellent work. You have a strong grasp of this lesson." : "Read each explanation, then retry the quiz to reinforce the concepts.");
      submit.disabled = true;
      reset.hidden = false;
    });

    reset?.addEventListener("click", () => {
      questions.forEach(question => {
        question.classList.remove("graded");
        question.querySelectorAll("input").forEach(input => { input.checked = false; input.disabled = false; });
        question.querySelectorAll(".quiz-option").forEach(option => option.classList.remove("correct", "incorrect"));
        question.querySelectorAll(".option-feedback").forEach(feedback => { feedback.textContent = feedback.dataset.explanation; });
      });
      result.classList.remove("visible");
      result.textContent = "";
      submit.disabled = false;
      reset.hidden = true;
    });
  });

  document.querySelectorAll("[data-completion]").forEach(control => {
    const key = "fred-cisco-complete-" + control.dataset.completion;
    try { control.checked = localStorage.getItem(key) === "true"; } catch (_) {}
    control.addEventListener("change", () => {
      try { localStorage.setItem(key, String(control.checked)); } catch (_) {}
      const label = control.closest(".lesson-complete")?.querySelector("[data-completion-label]");
      if (label) label.textContent = control.checked ? "Lesson marked complete. Progress is saved in this browser." : "Mark this lesson complete when you are ready.";
    });
  });
})();