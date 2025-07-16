import {Button, Input, Textarea, Typography} from "@material-tailwind/react";

export function Contact() {
    return (
        <section className="px-8 py-8 lg:py-16">
            <div className="mx-auto text-center bg-cyan-900/90 w-1/2 rounded-md p-8 items-center flex flex-col">
                <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
                    <form
                        action="#"
                        className="flex flex-col gap-4 lg:max-w-sm">
                        <div>
                            <Typography
                                variant="small"
                                className="mb-2 text-left font-medium "
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}>
                                Email
                            </Typography>
                            <Input
                                color="gray"
                                size="lg"
                                placeholder="name@email.com"
                                name="email"
                                className="focus:border-t-gray-900 p-2"
                                containerProps={{
                                    className: "!min-w-full",
                                }}
                                labelProps={{
                                    className: "hidden",
                                }}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}
                                crossOrigin={undefined}/>
                        </div>
                        <div>
                            <Typography
                                variant="small"
                                className="mb-2 text-left font-medium "
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}>
                                Message
                            </Typography>
                            <Textarea
                                rows={6}
                                color="gray"
                                placeholder="Message"
                                name="message"
                                className="focus:border-t-gray-900 p-2 rounded-sm"
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}/>
                        </div>
                        <Button className="w-full" color="gray"
                                placeholder={undefined}
                                onPointerEnterCapture={undefined}
                                onPointerLeaveCapture={undefined}>
                            Send message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;