function Validator(options) {
  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.closest(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }

  const selectorRules = {};

  function validate(inputElement, rule) {
    const errorElement = getParent(
      inputElement,
      options.formGroupSelector
    ).querySelector(options.errorSelector);
    let errorMessage;
    const rules = selectorRules[rule.selector];

    for (let i = 0; i < rules.length; i++) {
      errorMessage = rules[i](inputElement.value);
      if (errorMessage) break;
    }

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      getParent(inputElement, options.formGroupSelector).classList.add(
        "invalid"
      );
    } else {
      errorElement.innerText = "";
      getParent(inputElement, options.formGroupSelector).classList.remove(
        "invalid"
      );
    }
    return !errorMessage;
  }

  const formElement = document.querySelector(options.form);

  if (formElement) {
    formElement.onsubmit = (e) => {
      e.preventDefault();

      let isFormValid = true;

      options.rules.forEach((rule) => {
        const inputElement = formElement.querySelector(rule.selector);
        const isValid = validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        if (typeof options.onSubmit === "function") {
          const enableInputs = formElement.querySelectorAll(
            "[name]:not([disable])"
          );

          const formValues = Array.from(enableInputs).reduce(
            (values, input) => {
              values[input.name] = input.value;
              return values;
            },
            {}
          );

          options.onSubmit(formValues);
        } else {
          formElement.submit();
        }
      }
    };

    options.rules.forEach((rule) => {
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }

      const inputElement = formElement.querySelector(rule.selector);

      if (inputElement) {
        inputElement.onblur = () => {
          validate(inputElement, rule);
        };

        inputElement.oninput = () => {
          const errorElement = inputElement.parentElement.querySelector(
            options.errorSelector
          );
          errorElement.innerText = "";
          getParent(inputElement, options.formGroupSelector).classList.remove(
            "invalid"
          );
        };
      }
    });
  }
}

Validator.isRequired = (selector, message) => {
  return {
    selector,
    test(value) {
      return value.trim() ? undefined : message || "Vui lòng nhập trường";
    },
  };
};

Validator.isEmail = (selector, message) => {
  return {
    selector,
    test(value) {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value)
        ? undefined
        : message || "Trường này phải là email";
    },
  };
};

Validator.minLength = (selector, min, message) => {
  return {
    selector,
    test(value) {
      return value.length >= min
        ? undefined
        : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
    },
  };
};

Validator.isConfirmed = (selector, getConfirmValue, message) => {
  return {
    selector,
    test(value) {
      return value === getConfirmValue()
        ? undefined
        : message || `Giá trị nhập lại không chính xác`;
    },
  };
};
