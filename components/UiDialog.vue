<template>
  <button id="open-btn" type="button" class="btn btn-primary">
    Open modal using methods
  </button>

  <div
    id="modal-target"
    class="overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden --prevent-on-load-init"
    role="dialog"
    tabindex="-1"
    ref="modalRef"
  >
    <div
      class="modal-dialog overlay-open:opacity-100 overlay-open:duration-300"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Dialog Title</h3>
          <button
            type="button"
            class="btn btn-text btn-circle btn-sm absolute end-3 top-3"
            aria-label="Close"
            data-overlay="#modal-target"
          >
            <span class="icon-[tabler--x] size-4"></span>
          </button>
        </div>
        <div class="modal-body">
          This is some placeholder content to show the scrolling behavior for
          modals. Instead of repeating the text in the modal, we use an inline
          style to set a minimum height, thereby extending the length of the
          overall modal and demonstrating the overflow scrolling. When content
          becomes longer than the height of the viewport, scrolling will move
          the modal as needed.
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-soft btn-secondary"
            data-overlay="#modal-target"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HSOverlay } from "flyonui/flyonui";

const modalRef = useTemplateRef("modalRef");
const modal = ref<HSOverlay>();
onMounted(() => {
  //do something with modalRef AFTER mounted
  modal.value = new HSOverlay(modalRef.value!);
  modal.value.open();
});
</script>
