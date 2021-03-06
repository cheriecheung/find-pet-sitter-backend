import { hourlyRateOptions, nightlyRateOptions } from '../../../constants/selectOptions';

export const reset_password_default_values = {
    currentPassword: '',
    newPassword: '',
    newPasswordRepeat: ''
}

export const personal_default_values = {
    profilePicture: null,
    firstName: '',
    lastName: '',
    address: '',
    postcode: '',
    profileFacebook: '',
    profileInstagram: '',
    profileOther: '',
};

export const cat_sitter_default_values = {
    aboutSitter: '',
    experience: '',
    hasCat: false,
    hasMedicationSkills: false,
    hasInjectionSkills: false,
    hasCertification: false,
    hasGroomingSkills: false,
    hourlyRate: hourlyRateOptions[0],
    nightlyRate: nightlyRateOptions[0],
    unavailableDates: [],
};

// Cat owner field array data

export const oneDayObj = { date: '', startTime: '', endTime: '', };
export const overnightObj = { startDate: '', endDate: '' };

export const catObj = {
    name: '',
    age: '',
    gender: '',
    needsInjection: false,
    needsPill: false,
    isVaccinated: null,
    isInsured: null,
    breed: null,
    personality: null,
    favouriteTreat: '',
    photo: null,
};

export const cat_owner_default_values = {
    aboutMe: '',
    bookingOneDay: [oneDayObj],
    bookingOvernight: [overnightObj],
    cat: [catObj],
    catsDescription: '',
};

