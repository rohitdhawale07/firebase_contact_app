import React, { useState } from "react";

function UseDisclosure() {
  const [isOpen, setOpen] = useState(false);
  function onClose() {
    setOpen(false);
  }
  function onOpen() {
    setOpen(true);
  }
  return { onClose, onOpen, isOpen };
}

export default UseDisclosure;
