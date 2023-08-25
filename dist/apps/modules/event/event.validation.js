"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventValidation = void 0;
const zod_1 = require("zod");
// zod even validation
const createEventZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: 'title is required',
        }),
        description: zod_1.z.string({
            required_error: 'description is required',
        }),
        start_date: zod_1.z.string({
            required_error: 'event start Date is required',
        }),
        end_date: zod_1.z.string({
            required_error: 'event End date is required',
        }),
        location: zod_1.z.string({
            required_error: 'location is required',
        }),
        image: zod_1.z.string({
            required_error: 'image is required',
        }),
        cetagory: zod_1.z.string({
            required_error: 'cetagory is required',
        }),
        email: zod_1.z
            .string({
            required_error: 'user email is required',
        })
            .email(),
    }),
});
// Edite zod even validation
const EditeEventZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({
            required_error: 'title is required',
        })
            .optional(),
        description: zod_1.z
            .string({
            required_error: 'description is required',
        })
            .optional(),
        start_date: zod_1.z
            .string({
            required_error: 'event start Date is required',
        })
            .optional(),
        end_date: zod_1.z
            .string({
            required_error: 'event End date is required',
        })
            .optional(),
        location: zod_1.z
            .string({
            required_error: 'location is required',
        })
            .optional(),
        image: zod_1.z
            .string({
            required_error: 'image is required',
        })
            .optional(),
        cetagory: zod_1.z
            .string({
            required_error: 'cetagory is required',
        })
            .optional(),
        email: zod_1.z
            .string({
            required_error: 'user email is required',
        })
            .optional(),
    }),
});
exports.eventValidation = {
    createEventZodSchema,
    EditeEventZodSchema,
};
