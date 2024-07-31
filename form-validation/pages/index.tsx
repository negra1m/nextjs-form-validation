import {
  Theme,
  Box,
  DataList,
  Badge,
  Card,
  ThemePanel,
  TextField,
  Link,
} from "@radix-ui/themes";
import bg from "../assets/aa.jpg";

import { Flex } from "@radix-ui/themes";
import { useState } from "react";

export default function MyApp() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(false);

  return (
    <Theme accentColor="purple" grayColor="gray" radius="large" scaling="95%">
      {/* <ThemePanel /> */}
      <Flex
        justify="center"
        align="center"
        direction="column"
        gap="5rem"
        height="100vh"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "none",
        }}
      >
        <h1 style={{ fontSize: "2rem" }}>
          Form Validation on NextJS with Radix UI
        </h1>
        {/* Card starts here */}

        <Card>
          <Box width="400px">
            <Flex
              width="400px"
              direction="column"
              gap="2rem"
              align="center"
              justify="center"
            >
              <h1 style={{ fontSize: "2rem" }}>Insert your data</h1>
              <TextField.Root
                style={{ width: "300px" }}
                size="2"
                placeholder="Insert a valid email"
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                  validateForm();
                }}
              />
              <TextField.Root
                style={{ width: "300px" }}
                size="2"
                placeholder="Insert your first name"
                value={name}
                onChange={(e) => {
                  setName(e.currentTarget.value);
                  validateForm();
                }}
              />
              <TextField.Root
                style={{ width: "300px" }}
                size="2"
                placeholder="Insert your last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.currentTarget.value);
                  validateForm();
                }}
              />
            </Flex>
          </Box>
        </Card>

        {/* Cards ends here */}
        <Card>
          <DataList.Root>
            <DataList.Item align="center">
              <DataList.Label minWidth="88px">Status</DataList.Label>
              <DataList.Value>
                {valid ? (
                  <Badge color="jade" variant="soft" radius="full">
                    Valid
                  </Badge>
                ) : (
                  <Badge color="ruby" variant="soft" radius="full">
                    Not Valid
                  </Badge>
                )}
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Email</DataList.Label>
              <DataList.Value>
                <Link href={`mailto:${email}`}>{email}</Link>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Name</DataList.Label>
              <DataList.Value>{name}</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Last Name</DataList.Label>
              <DataList.Value>{lastName}</DataList.Value>
            </DataList.Item>
          </DataList.Root>
        </Card>
      </Flex>
    </Theme>
  );

  function validateForm() {
    setValid(
      name != "" &&
        lastName != "" &&
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)
        ? true
        : false
    );
  }
}