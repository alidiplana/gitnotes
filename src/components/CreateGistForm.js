import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const CreateGistForm = () => {
  const gists = fetch('https://api.github.com/gists').then((res)=>{
    return res.json();
  });
  console.log(gists);
  return (
    <div>
      <TextField
        id="outlined-full-width"
        style={{ margin: 8}}
        placeholder="Enter Gist Discription"
        fullWidth
        size="small"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <TextField
        id="outlined-full-width"
        style={{ margin: 8 }}
        placeholder="Enter file name"
        fullWidth
        margin="normal"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <TextField
        id="outlined-full-width"
        style={{ margin: 8 }}
        placeholder="Enter file content"
        fullWidth
        size="medium"
        margin="normal"
        multiline
        rows={14}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <Button variant="contained" color="primary">Add File</Button> <br/> <br />
      <Button variant="contained" color="primary">Add Gist</Button>
    </div>
  );
};

export default CreateGistForm;
