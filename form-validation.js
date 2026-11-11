const form = document.getElementById("contact-form");

if (form) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const status = document.getElementById("form-status");

  const fields = [
    {
      input: nameInput,
      error: document.getElementById("name-error"),
      message: "Please enter your name."
    },
    {
      input: emailInput,
      error: document.getElementById("email-error"),
      message: "Please enter a valid email address."
    },
    {
      input: messageInput,
      error: document.getElementById("message-error"),
      message: "Please enter a message."
    }
  ];

  function showError(input, errorElement, message) {
    input.setAttribute("aria-invalid", "true");
    errorElement.textContent = message;
  }

  function clearError(input, errorElement) {
    input.removeAttribute("aria-invalid");
    errorElement.textContent = "";
  }

  fields.forEach((field) => {
    field.input.addEventListener("input", () => {
      clearError(field.input, field.error);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstInvalidField = null;
    let isValid = true;

    fields.forEach((field) => {
      const value = field.input.value.trim();
      let errorMessage = "";

      if (!value) {
        errorMessage = field.message;
      } else if (
        field.input.type === "email" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ) {
        errorMessage = "Please enter a valid email address.";
      }

      if (errorMessage) {
        showError(field.input, field.error, errorMessage);
        isValid = false;

        if (!firstInvalidField) {
          firstInvalidField = field.input;
        }
      } else {
        clearError(field.input, field.error);
      }
    });

    const selectedTopic = form.querySelector(
      'input[name="topic"]:checked'
    );
    const topicError = document.getElementById("topic-error");

    if (!selectedTopic) {
      topicError.textContent = "Please select a topic.";
      isValid = false;

      if (!firstInvalidField) {
        firstInvalidField = document.getElementById("question");
      }
    } else {
      topicError.textContent = "";
    }

    if (!isValid) {
      status.textContent = "Please correct the errors in the form.";
      firstInvalidField.focus();
      return;
    }

    status.textContent =
      "Your form passed validation. This demonstration does not send or store messages.";

    form.reset();
  });
}
