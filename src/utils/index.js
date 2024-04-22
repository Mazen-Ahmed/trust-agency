export const scrollToSectionHandler = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  export const validateEmail=(email)=>{
    if(email)   return !!(email.match("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"))
  }
  export const validatePhone=(phone)=>{
    if(phone)  return !!(phone.match("^(?:\d{2}-\d{3}-\d{3}-\d{3}|\d{11})$"))
    else return false
  }