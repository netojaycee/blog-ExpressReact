
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Select, Option, Textarea } from "@material-tailwind/react";

export function ContactForm() {
    return (
        <Card color="white" shadow={false} className="rounded-3xl bg-white shadow-2xl shadow-t-xl p-10">

            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Select variant="outlined" label="Select A Subject">
                        <Option>Enquire</Option>
                        <Option>Support</Option>
                    </Select>
                    <Input size="lg" label="First Name" />
                    <Input size="lg" label="Last Name" />
                    <Input size="lg" label="Email" />
                    <Textarea label="Message" />

                </div>
                <Checkbox
                    label={
                        <Typography
                            variant="small"
                            color="gray"
                            className="flex items-center font-normal"
                        >
                            <span>
                                Before submitting please read our &nbsp;
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    Terms and Conditions, Privacy Policy
                                </a>
                            </span>

                        </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />
                <Button className="mt-6 bg-primary text-white rounded-full" fullWidth>
                    Submit
                </Button>
                
            </form>
        </Card>
    );
}