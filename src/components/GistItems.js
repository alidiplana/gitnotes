import React from "react";
import { Avatar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function onChange(newValue) {
    console.log("change", newValue);
  }

const GistItem = (props) => {
  const [data, setData] = React.useState(null);

  const fetchCode = async () => {
    const response = await fetch(props.file.raw_url).then((res) => res.text());
    setData(response);
  };

  React.useEffect(() => {
    fetchCode();
  });
  return (
    <div style={{ alignItems: "center" }}>
      <div>
        <Avatar alt={props.userName} src={props.userAvatar} />
        <Typography
          variant="body2"
          component="p"
          style={{ textAlign: "left", color: blue[701] }}
        >
          {" "}
          {props.userName}
          {" / "}
        </Typography>
        <Typography
          style={{
            textAlign: "left",
            color: blue[700],
            fontWeight: "bold",
          }}
        >
          {props.file.filename}
        </Typography>
      </div>
      <AceEditor 
      style={{marginBottom: "5%"}}
        mode="java"
        theme="github"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        height="200px"
        value={data}
        readOnly={true}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

export default GistItem;
