import { HITANS } from "../hitans";
import { testSegment } from "./utils";
import { ReturnValue } from "../../return-value";

testSegment(HITANS, [
    {
        serialized: "HITANS:53:5:4+" +
            "1+" +
            "1+" +
            "1+" +
            "J:N:0:" +
            "942:2:MTAN2:mobileTAN::mobile TAN:6:1:SMS:2048:1:J:1:0:N:0:2:N:J:00:1:1:" +
            "962:2:HHD1.4:HHD:1.4:Smart-TAN plus manuell:6:1:Challenge:2048:1:J:1:0:N:0:2:N:J:00:1:1:" +
            "972:2:HHD1.4OPT:HHDOPT1:1.4:Smart-TAN plus optisch:6:1:Challenge:2048:1:J:1:0:N:0:2:N:J:00:1:1'",
        structured: {
            type: "HITANS",
            segNo: 53,
            version: 5,
            reference: 4,
            maxRequests: 1,
            minSignatures: 1,
            securityClass: 1,
            oneStepAllowed: true,
            multiple: false,
            securityProfile: 0,
            tanMethods: [
                {
                    allowedFormat: "1",
                    cancellable: false,
                    challengeClassRequired: false,
                    challengeStructured: false,
                    challengeValueRequired: true,
                    descriptionRequired: "1",
                    hhdUcRequired: false,
                    initializationMode: "00",
                    maxLengthInput: 6,
                    maxLengthReturnvalue: 2048,
                    multiple: true,
                    name: "mobile TAN",
                    numberOfSupportedLists: 1,
                    principalAccountRequired: true,
                    securityFunction: "942",
                    smsChargeAccountRequired: false,
                    supportedMediaNumber: 1,
                    tanListNumberRequired: false,
                    tanProcess: "2",
                    tanTimeDialogAssociation: "1",
                    techId: "MTAN2",
                    textReturnvalue: "SMS",
                    version: 5,
                    zkaId: "mobileTAN",
                    zkaVersion: "",
                },
                {
                    allowedFormat: "1",
                    cancellable: false,
                    challengeClassRequired: false,
                    challengeStructured: false,
                    challengeValueRequired: true,
                    descriptionRequired: "1",
                    hhdUcRequired: false,
                    initializationMode: "00",
                    maxLengthInput: 6,
                    maxLengthReturnvalue: 2048,
                    multiple: true,
                    name: "Smart-TAN plus manuell",
                    numberOfSupportedLists: 1,
                    principalAccountRequired: true,
                    securityFunction: "962",
                    smsChargeAccountRequired: false,
                    supportedMediaNumber: 1,
                    tanListNumberRequired: false,
                    tanProcess: "2",
                    tanTimeDialogAssociation: "1",
                    techId: "HHD1.4",
                    textReturnvalue: "Challenge",
                    version: 5,
                    zkaId: "HHD",
                    zkaVersion: "1.4",
                },
                {
                    allowedFormat: "1",
                    cancellable: false,
                    challengeClassRequired: false,
                    challengeStructured: false,
                    challengeValueRequired: true,
                    descriptionRequired: "1",
                    hhdUcRequired: false,
                    initializationMode: "00",
                    maxLengthInput: 6,
                    maxLengthReturnvalue: 2048,
                    multiple: true,
                    name: "Smart-TAN plus optisch",
                    numberOfSupportedLists: 1,
                    principalAccountRequired: true,
                    securityFunction: "972",
                    smsChargeAccountRequired: false,
                    supportedMediaNumber: 1,
                    tanListNumberRequired: false,
                    tanProcess: "2",
                    tanTimeDialogAssociation: "1",
                    techId: "HHD1.4OPT",
                    textReturnvalue: "Challenge",
                    version: 5,
                    zkaId: "HHDOPT1",
                    zkaVersion: "1.4",
                },
            ],
        },
    },
], "in");
